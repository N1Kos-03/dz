const language = prompt('Введите язык');
switch (language) {
    case 'ru':
        console.log('Привет');
        break;
    case 'en':
        console.log('Hello');
        break;
    case 'de':
        console.log('Guten Tag');
        break;
    case 'ch':
        console.log('嗨。');
        break;
    default:
        console.log('Unknown language');
        break;
}