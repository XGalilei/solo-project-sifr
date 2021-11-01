import {ciphersReducer} from './ciphers.reducer.js';

describe('Testing cipherReducers', () => {
    test('allCiphers should have have an empty initial state', () => {
        let action = [];
        let output = ciphersReducer.allCiphers(undefined, action);
        expect(typeof output).toBe('object');
        expect(output).toBeDefined();
    })
});