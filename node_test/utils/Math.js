// function sum(a, b){
//     return  a + b;
// }

function sum(...numbers){
    if(!numbers.length){
        return 0;
    }

    return numbers.reduce((acc, item) => acc + item, 0)
}

function div(a, b){
    return a- b;
}

module.exports = {
    sum, 
    div
}