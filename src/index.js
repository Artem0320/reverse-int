module.exports = function reverse (n) {
    let reverseN = ''
    for(let digit of String(Math.abs(n))){
        reverseN = digit + reverseN
    }
    return Number(reverseN)
}
