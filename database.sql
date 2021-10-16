
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "ciphers" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "history" TEXT NOT NULL,
    "type_code" INT NOT NULL
);
-- "type_code" indicates the type of cipher/code, as well as what features
-- are available.
-- * 0: no encrypt/decrypt support
-- * 1: cipher has key support, and can be attempted as a challenge
-- * 2: cipher has no key, and can be attempted as a challenge
-- * 3: cipher has key support, but cannot be attempted as a challenge
-- * 4: cipher has no key, and cannot be attempted as a challenge

INSERT INTO "ciphers" ("name", "type_code", "description", "history")
VALUES ('Morse Code',
 2,
'Used as a means of encoding telegram signals',
'First invented in the early 19th century'
),
('Caesar Cipher',
 1,
'Simple yet (more or less) effective',
'It all began with Caesar'
),
('Vigenere Cipher',
1,
'Caesar on steroids',
'Another thing from the French'
);

CREATE TABLE "feedback" (
    "id" SERIAL PRIMARY KEY,
    "message" TEXT NOT NULL,
    "date" DATE DEFAULT NOW(),
    "user_id" INT REFERENCES "user" NOT NULL
); 

CREATE TABLE "challenges" (
    "id" SERIAL PRIMARY KEY,
    "encrypted" VARCHAR(500) NOT NULL,
    "decrypted" VARCHAR(500) NOT NULL,
    "key" VARCHAR(500),
    "title" VARCHAR(500) NOT NULL,
    "cipher_id" INT REFERENCES "ciphers" NOT NULL,
    "creator_id" INT REFERENCES "user" NOT NULL
);

CREATE TABLE "attempts" (
    "id" SERIAL PRIMARY KEY,
    "success" BOOLEAN NOT NULL,
    "time" DATE DEFAULT NOW(),
    "user_id" INT REFERENCES "user" NOT NULL,
    "challenge_id" INT REFERENCES "challenges" NOT NULL
);

