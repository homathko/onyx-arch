const chunk = '1 0 63 1 0 28 146 56 132 111 51 48 48 52 51 52 48 54 51 51 48 50 49 52 48 0 0 23 0 0 90 166 201 74 3 0 11 1 49 181 69 123 20 225 0 0 0 7 2 0';

const payloadLength = ' 15 ';
const payload = '13 123 104 48 66 21 89 206 244 194 40 206 4 56 4'

const array = (chunk + payloadLength + payload).split(' ').map((num) => parseInt(num, 10));

const buffer = Buffer.from(array);

module.exports = buffer;