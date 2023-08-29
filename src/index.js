module.exports = function toReadable (number) {

    let fromOneToTwenty = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
    'seventeen', 'eighteen', 'nineteen'];
    
    let dozens =  ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
    'ninety'];
    
    let numberString = number.toString();
    
    if (number === 0) {
        return 'zero'
    }
    
    if (number < 20) {
        return fromOneToTwenty[number];
    }
    
    if ( numberString.length === 2) {
        if (numberString[1] === '0') {
            return dozens[numberString[0]];
        } else {
        return dozens[numberString[0]] + ' ' + fromOneToTwenty[numberString[1]];
    }
}
    
    if ( numberString.length === 3) {
    
        if ( numberString[1] === '0' && numberString[2] === '0') {
            return fromOneToTwenty[numberString[0]] + ' hundred'
        } else {
        return fromOneToTwenty[numberString[0]] + ' hundred ' + toReadable(+(numberString[1] + numberString[2]));
    }
    }
    
    if ( numberString.length === 4) {
        if(numberString[2] === '1') {
            return fromOneToTwenty[numberString[0]] + ' thousand ' + fromOneToTwenty[numberString[1]] + ' hundred ' + fromOneToTwenty[(+numberString[3] + 10)];
    }
         else {
            return fromOneToTwenty[numberString[0]] + ' thousand '  + fromOneToTwenty[numberString[1]]  + ' hundred '  + dozens[numberString[2]] + ' ' + fromOneToTwenty[numberString[3]];
            }
        }
    
    if ( numberString.length === 5) {
    
       if(numberString[0] === '1') {
        return fromOneToTwenty[numberString[0] + numberString[1]] + ' thousand ' + fromOneToTwenty[numberString[2]] + ' hundred ' + dozens[numberString[3]] + ' ' + fromOneToTwenty[numberString[4]];
            /*return dozens[numberString[0]] + fromOneToTwenty[numberString[1]] + ' thousand ' + fromOneToTwenty[numberString[2]] + ' hundred ' + fromOneToTwenty[(+numberString[4] + 10)]; */
    }
         else {
            return dozens[numberString[0]] + ' ' + fromOneToTwenty[numberString[1]] + ' thousand ' + fromOneToTwenty[numberString[2]] + ' hundred ' + dozens[numberString[3]] + ' ' + fromOneToTwenty[numberString[4]];
    }
    
    }
    }



