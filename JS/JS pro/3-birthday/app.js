const user = {
    birthday: '2003-01-01'
};

function validateBirthday(user) {
    const birthDate = new Date(user.birthday);
    const currentDate = new Date(); 
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDifference = currentDate.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }
    return age > 14;
}
console.log(validateBirthday(user)); 
