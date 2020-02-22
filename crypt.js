const crypto = require('crypto');

const IV_LENGTH = 16;
const NONCE_LENGTH = 5; // 12 Gives us 8-character Base64 output. The higher this number, the better

const generateNewKey = (key) => {
  return crypto.pbkdf2Sync('DX9LJS2hi96LH5oDvlsQVLKELDYLgTpD', 'B5A43AEB932A3783E17F8F8965B81', 10000, 32, 'sha512')
}

const encrypt = (key, text) => {
  let nonce = crypto.randomBytes(NONCE_LENGTH);
  let iv = Buffer.alloc(IV_LENGTH)
  nonce.copy(iv)

  let cipher = crypto.createCipheriv('aes-256-ctr', key, iv);
  let encrypted = cipher.update(text.toString());
  message = Buffer.concat([nonce, encrypted, cipher.final()]);
  return message.toString('base64')
}

const decrypt = (key, text) => {
  let message = Buffer.from(text, 'base64')
  let iv = Buffer.alloc(IV_LENGTH)
  message.copy(iv, 0, 0, NONCE_LENGTH)
  let encryptedText = message.slice(NONCE_LENGTH)
  let decipher = crypto.createDecipheriv('aes-256-ctr', key, iv);
  let decrypted = decipher.update(encryptedText);
  try {
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
  } catch (Err) {
    return 'NULL';
  }
}
let key = generateNewKey();
console.log(key)
let encrypted = encrypt(key, 'This is only the beginning!..')
console.log(encrypted)
let decrypted = decrypt(key, encrypted)
console.log(decrypted)

// module.exports.encrypt = encrypt
// module.exports.decrypt = decrypt
// module.exports.generateNewKey = generateNewKey
