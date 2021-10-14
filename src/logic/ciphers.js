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
function encrypt(message, key, cipherNumber) {

}

/**
 * 
 * @param {*} message 
 * @param {*} key 
 * @param {*} cipherNumber 
 */
function decrypt(message, key, cipherNumber) {

}

// HELPER METHOD
function toAsciiArray(message) {
    let result = [];
    for(let i = 0; i < message.length; i++) {
        result.push(message.charCodeAt(i));
    }

    return result;
}

//CAESAR CIPHER SUPPORT

function encryptCaesar(message, key) {
    
}

function decryptCaesar(message, key) {

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