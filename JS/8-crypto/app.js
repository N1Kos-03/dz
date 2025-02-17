function encryptPassword(password) {
    const chars = password.split('');
    const length = chars.length;
    const mid = Math.floor(length / 2);

    for (let i = 0; i < mid; i++) {
        const temp = chars[i];
        chars[i] = chars[length - 1 - i];
        chars[length - 1 - i] = temp;
    }

    return chars.join('');
}

const originalPassword = 'nikos03';
const encryptedPassword = encryptPassword(originalPassword);

function checkPassword(encryptedPassword, originalPassword) {
    const decryptedPassword = encryptPassword(encryptedPassword);
    return decryptedPassword === originalPassword;
}

console.log('Зашифрованный пароль:', encryptedPassword);
console.log('Проверка пароля:', checkPassword(encryptedPassword, originalPassword)); 