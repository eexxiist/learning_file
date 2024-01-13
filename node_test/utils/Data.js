// @params: email-string
// @example: mail@mail.ru
function validateEmail(stringArg) {
  const parts = stringArg.split("@");

  if (parts.length !== 2) {
    return false;
  }

  if (parts[0].length === 0 || parts[1].length === 0) {
    return false;
  }

  if (parts[1].indexOf(".") === -1) {
    return false;
  }

  return true;
}

// если объект содержит 4 свойства, каждое из свойств является строкой и длина последнего
// свойства больше 10 и меньше 50, то объект проходит проверку.

function checkObj(objArg) {
  if (Object.values(objArg).length !== 4) {
    return false;
  }

  if (
    Object.values(objArg).filter((el) => typeof el === "string").length !==
    Object.values(objArg).length
  ) {
    return false;
  }

  if (
    !(
      typeof Object.values(objArg).pop() === "string" &&
      Object.values(objArg).pop().length > 10 &&
      Object.values(objArg).pop().length < 50
    )
  ) {
    return false;
  }

  return true;
}

let checkedArray = (arr) => {
  // Берет все элементы массива
  for(let i = 0; i < arr.length; i++){
    // берет последующие элементы относительно текущего
    for(let j = i + 1; j < arr.length; j++){
      // нашли совпадение или нет
      if(arr[i] === arr[j]){
        return false;
      }
    }
  }


  return true;
}

module.exports = {
  validateEmail,
  checkObj,
  checkedArray,
};
