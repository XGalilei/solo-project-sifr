
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

-- feedback table: incomplete
CREATE TABLE "feedback" (
    "id" SERIAL PRIMARY KEY,
    "message" VARCHAR(1000) NOT NULL,
    "date" DATE, -- incomplete
    "user_id" FOREIGN KEY REFERENCES "user"."id"
); 

CREATE TABLE "attempts" (
    "id" SERIAL PRIMARY KEY,
    "success" BOOLEAN NOT NULL,
    "time" DATE,
    "user_id" FOREIGN KEY REFERENCES "user"."id"
    "challenge_id" FOREIGN KEY REFERENCES "challenges"."id"
);

CREATE TABLE "ciphers" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255),
    "description" VARCHAR(500),
    "history" VARCHAR(2000)
);

CREATE TABLE "challenges" (
    "id" SERIAL PRIMARY KEY,
    "encrypted" VARCHAR(500),
    "decrypted" VARCHAR(500),
    "key" VARCHAR(500),
    "cipher_id" FOREIGN KEY REFERENCES "ciphers"."id",
    "creator_id" FOREIGN KEY REFERENCES "user"."id"
);