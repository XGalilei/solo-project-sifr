--CREATE DATABASE sifr;


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
'<div className="container">
      <p>You’ve probably heard of SOS (three dots, three dashes, three dots), right? That should give you an entry-level understanding of how Morse code works: text characters are
encoded into sequences for transmitting, with the intent of being decoded on the other end. The “dashes” and “dots” is probably the most common encoding for text-based mediums,
but remember that Morse code was intended for use over telegrams. The way SIFR encodes Morse is less popular, but more accurately reflects how Morse code is intended to be
perceived.</p>

<p>The telegram essentially works like binary in that there are two values: on and off. SIFR’s model encodes that as "=" and ".", respectively. Dots and dashes (or as they’re
called in this format, “dits” and “dahs”), are represented as "=" and "===". A single period marks the end of a signal. Three periods separate letters, while words are separated
by seven periods.</p>

<p>Here are the sequences used in International Morse Code (there are sequences for numbers, but they’re omitted since our version currently lacks support):</p>

<div className="container">
<ul className="box"><li>A: =.===</li><li>B: ===.=.=.=</li><li>C: ===.=.===.=</li><li>D: ===.=.=</li><li>E: =</li><li>F: =.=.===.=</li><li>G: ===.===.=</li></ul>
<ul className="box"><li>H: =.=.=.=</li><li>I: =.=</li><li>J: =.===.===.===</li><li>K: ===.=.===</li><li>L: =.===.=.=</li><li>M: ===.===</li><li>N: ===.=</li></ul>
<ul className="box"><li>O: ===.===.===</li><li>P: =.===.===.=</li><li>Q: ===.===.=.===</li><li>R: =.===.=</li><li>S: =.=.=</li><li>T: ===</li><li>U: =.=.===</li></ul>
<ul className="box"><li>V: =.=.=.===</li><li>W: =.===.===</li><li>X: ===.=.=.===</li><li>Y: ===.=.===.===</li><li>Z: ===.===.=.=</li></ul></div>
<br/>
<p className="clear">Why are the letters assigned certain sequences? Well, the assignments are based on the frequency of letters in the English languages. “e” and “t”, the two
most common letters, have one-character sequences, while some of the least common letters (like “q”, “z”, and “x”) have four-character sequences. This allows for more 
efficient messages.</p>'
,
'<p>The original Morse code was developed by Samuel Morse (surprised? Yeah, I didn’t think so) around 1837, as a means of encoding text over the telegram. Implementation became 
widespread by the mid-1840s, and Morse code continued as the standard form of long-distance communication for decades after, undergoing multiple revisions along the way.</p> 

<p>Today, Morse code has largely fallen out of use, although the United States Air Force still trains ten people in Morse annually.</p>'
),
('Caesar Cipher',
 1,
'Simple yet (more or less) effective',
'<p>While not the first to use a substitution cipher, Julius Caesar is the first recorded user of this scheme. In his case, he typically encoded military messages with a shift of
three, and his nephew Caesar Augustus used it with a right shift of one. </p>
<p>The Caesar Cipher was used by the Russian army as late as 1915 (although by that point it did little to keep their messages secret).</p>'
),
('Vigenère Cipher',
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

