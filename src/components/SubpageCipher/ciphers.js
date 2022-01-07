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
function decrypt(message, key, cipherNumber) {
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
        let temp = ((arr[i] + modKey) % 26) ;

        if(temp === 0) { //edge case for 'Z'
            temp = 26;
        }
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
        if(temp <= 0) {
            temp += 26;
        }
        result += String.fromCharCode(temp + ASCII_UPPER_BASE - 1);
    }
    return result;
}

//VIGENERE CIPHER SUPPORT

function encryptVigenere(message, key) {
    let result = '';
    for(let i = 0; i < message.length; i++) {
        result += encryptCaesar(message.charAt(i), key.charAt(i % key.length));
    }
    return result;
}

function decryptVigenere(message, key) {
    let result = '';
    for (let i = 0; i < message.length; i++) {
        result += decryptCaesar(message.charAt(i), key.charAt(i % key.length));
    }
    return result;
}

// MORSE CODE SUPPORT
function encodeMorse(message) {
    let result = [];
    for(let i = 0; i < message.length; i++) {
        const value = message[i].toUpperCase().charCodeAt(0) - ASCII_UPPER_BASE;
        result.push(morse_code[value]);
    }
    let fullResult = '';
    console.log(result);
    for(let i = 0; i < result.length; i++) {
        if( i === 0) {
         fullResult += result[i];   
        }
        else {
            fullResult += ('...' + result[i]);
        }
    }
    return fullResult;

}

function decodeMorse(message) {
    let arr = message.split('...');
    let result = '';
    for (let val of arr) {
        result += String.fromCharCode(morse_code.indexOf(val) + ASCII_UPPER_BASE);
    }
    return result;
}
export default {encrypt, decrypt};