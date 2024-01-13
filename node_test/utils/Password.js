
// 1. Длина - 8 - 20
// 2. Наличие цифр
// 3. Наличие букв
// 4. Наличие символов или ! или @


// console.log(parseInt('9')) // 9 - number
// console.log(parseInt('a')) // NaN - not a number

function containsDigits(strArg, req = 1){
    let count = 0; 

    for(let char in strArg){
        if(!isNaN(parseInt(char))){
            count++;
        }
    }

    return (count >= req) ? true : false;
}

function containsLetter(strArg){
    for(let char of strArg){
        const charLower = char.toLowerCase(); // 'A' - 'a' => a - z
        if(charLower >= 'a' && charLower <= 'z'){
            return true;
        }
    }
    return false;
}

function searchSymbol(strArg){
    if(strArg.split('').reduce((acc, item) => {
        if('@!'.includes(item)){
            return acc + 1;
        }

        return acc;
    }, 0) > 0){
        return true;
    }
    
    return false;
}



function passwordChecked(stringArg){
    const symbol = stringArg.split('');

    if(symbol.length < 8 || symbol.length > 20){
        console.log('Check length false')
        return false;
    }

    if(!containsLetter(stringArg)){
        console.log('Check letter false')
        return false;
    }

    if(!containsDigits(stringArg)){
        console.log('Check digits false')
        return false;
    }

    if(!searchSymbol(stringArg)){
        console.log('Check symbol false')
        return false;
    }

    return true
}


module.exports = {
    passwordChecked,
}