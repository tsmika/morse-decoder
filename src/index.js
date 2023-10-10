const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let decodedText = '';

    for (let i = 0; i < expr.length; i = i + 10) {
        let numbSimbol = expr.slice(i, i + 10);
        decodedText = `${decodedText}${getSimbol(numbSimbol)}`;
    }
    return decodedText;
}

function getSimbol(numberSimb) {
    if (numberSimb === '**********') return ' ';

    let dashAndDotsSimb = '';
    let dashOrDotBit = '';
    for (let i = 0; i < 10; i = i + 2) {
        dashOrDotBit = numberSimb.slice(i, i + 2);
        if (dashOrDotBit === '10') dashAndDotsSimb = dashAndDotsSimb + '.';
        if (dashOrDotBit === '11') dashAndDotsSimb = dashAndDotsSimb + '-';
    }
    for (key in MORSE_TABLE) {
        if (key === dashAndDotsSimb) return MORSE_TABLE[key];
    }
}

module.exports = {
    decode
}