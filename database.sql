
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

CREATE TABLE "feedback" (
    "id" SERIAL PRIMARY KEY,
    "message" TEXT NOT NULL,
    "date" DATE DEFAULT NOW(),
    "user_id" INT REFERENCES "user" NOT NULL
); 

CREATE TABLE "challenges" (
    "id" SERIAL PRIMARY KEY,
    "encrypted" VARCHAR(500),
    "decrypted" VARCHAR(500),
    "key" VARCHAR(500),
    "cipher_id" INT REFERENCES "ciphers" NOT NULL,
    "creator_id" INT REFERENCES "user" NOT NULL
);

CREATE TABLE "attempts" (
    "id" SERIAL PRIMARY KEY,
    "success" BOOLEAN NOT NULL,
    "time" DATE,
    "user_id" INT REFERENCES "user" NOT NULL,
    "challenge_id" INT REFERENCES "challenges" NOT NULL
);

