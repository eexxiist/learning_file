function maxLengthString(arrayArg){
    return arrayArg.reduce((accamulator, currentValue) => (accamulator.length <= currentValue.length) ? currentValue : accamulator , '')
}

module.exports = {
    maxLengthString
}