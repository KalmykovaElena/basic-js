const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isStraight) {
    this.isStraight = isStraight
}

encrypt(message, key) {
    if (!message || !key) {
        throw new Error('Incorrect arguments!')
    }
    let messageCode = message.split('').map(e => e.toUpperCase().charCodeAt(0) - 65)
    let keyCode = key.split('').map(e => e.toUpperCase().charCodeAt(0) - 65)
    let result = []
    while (keyCode.length < messageCode.length) {
        keyCode = [...keyCode, ...keyCode]

    }
    keyCode.splice(messageCode.length)
    let count = 0
    for (let i = 0; i < messageCode.length; i++) {

        if (messageCode[i] >= 0 && messageCode[i] <= 25) {
            result.push(String.fromCharCode(((messageCode[i] + keyCode[count]) % 26) + 65))
            count++
        } else {
            result.push(String.fromCharCode(+messageCode[i] + 65))

        }
    }

    return this.isStraight === false ? result.reverse().join('') : result.join('')
}

decrypt(message, key) {
    if (!message || !key) {
        throw new Error('Incorrect arguments!')
    }
    let messageCode = message.split('').map(e => e.toUpperCase().charCodeAt(0) - 65)
    let keyCode = key.split('').map(e => e.toUpperCase().charCodeAt(0) - 65)
    let result = []
    while (keyCode.length < messageCode.length) {
        keyCode = [...keyCode, ...keyCode]

    }
    keyCode.splice(messageCode.length)
    let count = 0
    for (let i = 0; i < messageCode.length; i++) {

        if (messageCode[i] >= 0 && messageCode[i] <= 25) {
            result.push(String.fromCharCode(((messageCode[i] - keyCode[count] + 26) % 26) + 65))
            count++
        } else {
            result.push(String.fromCharCode(+messageCode[i] + 65))

        }
    }

    return this.isStraight === false ? result.reverse().join('') : result.join('')

}
}

module.exports = {
  VigenereCipheringMachine
};
