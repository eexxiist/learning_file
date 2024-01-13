function validatePhone(stringArg){
    stringArg = stringArg.replace('+', '');

    if(stringArg.length !== 11){
        return false
    }

    if(!'78'.includes(stringArg[0])){
        return false
    }

    // // 8 != 9 -> false
    // // 9 != 9 -> ------

    // return true;
} 

module.exports = {
    validatePhone,
}