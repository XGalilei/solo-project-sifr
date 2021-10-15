const ASCII_UPPER_BASE = 65; 
const ASCII_LOWER_BASE = 97;

const morse_code = ['=.===', '===.=.=.=', '===.=.===.==', '===.=.=',
'=', '=.=.===.=', '===.===.=', '=.=.=.=',
'=.=', '=.===.===.===', '===.=.===', '=.===.=.=',
'===.===', '===.=', '===.===.===', '=.===.===.=',
'===.===.=.===', '=.===.=','=.=.=', '===',
'=.=.===', '=.=.=.===', '=.===.===', '===.=.=.===',
'===.=.===.===', '===.===.=.='
]

/**
 * 
 * @param {*} message the
 * @param {*} key the key necessary for encryption
 * @param {*} cipherNumber references the proper cipher
 */
export function encrypt(message, key, cipherNumber) {
    switch(cipherNumber) {
        case 1:
            return encodeMorse(message);
        case 2:
            return encryptCaesar(message, key);
        case 3:
            return encryptVigenere(message, key);
    }
};

/**
 * 
 * @param {*} message 
 * @param {*} key 
 * @param {*} cipherNumber 
 */
export function decrypt(message, key, cipherNumber) {
    switch(cipherNumber) {
        case 1:
            return decodeMorse(message);
        case 2:
            return decryptCaesar(message, key);
        case 3:
            return decryptVigenere(message, key);
    }
};

// HELPER METHOD
function toAsciiArray(message) {
    let result = [];
    for(let i = 0; i < message.length; i++) {
        result.push(message.charCodeAt(i) + 1 - ASCII_UPPER_BASE);
    }

    return result;
}

//CAESAR CIPHER SUPPORT

function encryptCaesar(message, key) {
    const arr = toAsciiArray(message.toUpperCase());
    const modKey = key.toUpperCase().charCodeAt(0) - ASCII_UPPER_BASE;
    let result = '';
    for(let i = 0; i < arr.length; i++) {
        let temp = (arr[i] + modKey) % 26;
        result += String.fromCharCode(temp + ASCII_UPPER_BASE - 1);
    }
    return result;

}

/**
 * Decrypts a 
 * @param {*} message 
 * @param {*} key 
 * @returns 
 */
function decryptCaesar(message, key) {
    const arr = toAsciiArray(message.toUpperCase());
    const modKey = key.toUpperCase().charCodeAt(0) - ASCII_UPPER_BASE;
    let result = '';
    for(let i = 0; i < arr.length; i++) {
        let temp = (arr[i] - modKey) % 26;

        //used to correct negative modulo values
        if(temp < 0) {
            temp += 26;
        }
        result += String.fromCharCode(temp + ASCII_UPPER_BASE - 1);
    }
    return result;
}

//VIGENERE CIPHER SUPPORT

function encryptVigenere(message, key) {

}

function decryptVigenere(message, key) {

}

// MORSE CODE SUPPORT
function encodeMorse(message) {
    let result = [];
    for(let i = 0; i < message.length; i++) {
        const value = message.charCodeAt(i) - ASCII_UPPER_BASE;
        result.push(morse_code[value]);
    }
    let fullResult = result[0];
    for(let i = 1; i < result.length; i++) {
        fullResult.append('...' + result[i]);
    }
    return result;

}

function decodeMorse(message) {
    let arr = message.split('...');
    return result;
}