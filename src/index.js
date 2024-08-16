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
    let result = '';
    let morse = '';

    for (let i = 0; i < expr.length; i += 10) {
        const code = expr.slice(i, i + 10);

        if (code === '**********') {
            result += ' ';
        } else {
            morse = '';
            for (let j = 0; j < code.length; j += 2) {
                const binCode = code.slice(j, j + 2);
                if (binCode === '00') {
                    continue;
                } else if (binCode === '10') {
                    morse += '.';
                } else if (binCode === '11') {
                    morse += '-';
                }
            }
            result += MORSE_TABLE[morse];
        }
    }

    return result;
}

module.exports = {
    decode
}