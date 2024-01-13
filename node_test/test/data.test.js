// const dataOperation = require('../utils/Data');
// const MathModule = require('../utils/Math');


// const expect = require('chai').expect;

// const mockData = [
//     'user@example.com','john.doe@mycompany.net','support@websitek'
// ];


// for(let item of mockData){
//     it('Should validate email', () => {
//         let expected = true,
//             result = dataOperation.validateEmail(item);

//         assert.equal(result, expected)
//     })
// }

// для телефона и пароля и тесты для них, читать чистый код про мок



// 1. На вход принимает объект созданный по конструктора объекта, если объект содержит 4 свойства, каждое из свойств является строкой и длина последнего
// свойства больше 10 и меньше 50, то объект проходит проверку.

// let obj = {
//     firstName: 'Name',
//     lastName: 'Surname',
//     city: 'Moscow',
//     address: 'Sosnovaya 1k2 950'
// }

// function User(nameArg, surnameArg, cityArg, addressArg){
//     this.firstName = nameArg;
//     this.lastName = surnameArg;
//     this.city = cityArg;
//     this.adress = addressArg;
// }



// it('Checkd user object', () => {
//     let user = new User('Bob', 'Ivanov', 'Moscow', 'Bobrova 1k2'),
//         expected = true,
//         result = dataOperation.checkObj(user);

//     assert.equal(result, expected);
// })
// it('Checkd user object', () => {
//     let user = new User('Bob', 'Ivanov', 'Moscow', 'Bobrova 1k2'),
//         expected = true,
//         result = dataOperation.checkObj(user);

//     assert.equal(result, expected);
// })
// it('Checkd user object', () => {
//     let user = new User('Bob', 'Ivanov', 'Moscow', 'Bobrova 1k2'),
//         expected = true,
//         result = dataOperation.checkObj(user);

//     assert.equal(result, expected);
// })
// it('Checkd user object', () => {
//     let user = new User('Bob', 'Ivanov', 'Moscow', 'Bobrova 1k2'),
//         expected = true,
//         result = dataOperation.checkObj(user);

//     assert.equal(result, expected);
// })
// it('Checkd user object', () => {
//     let user = new User('Bob', 'Ivanov', 'Moscow', 'Bobrova 1k2'),
//         expected = true,
//         result = dataOperation.checkObj(user);

//     assert.equal(result, expected);
// })
// it('Checkd user object', () => {
//     let user = new User('Bob', 'Ivanov', 'Moscow', 'Bobrova 1k2'),
//         expected = true,
//         result = dataOperation.checkObj(user);

//     assert.equal(result, expected);
// })
// it('Checkd user object', () => {
//     let user = new User('Bob', 'Ivanov', 'Moscow', 'Bobrova 1k2'),
//         expected = true,
//         result = dataOperation.checkObj(user);

//     assert.equal(result, expected);
// })


// describe('Objects', () => {
//     describe('Simple objects', () => {
//         it('Should return last object value', () => {
//             let user = {a: 2, b: 3},
//                 expected = 3,
//                 result = Object.values(user).pop();
        
//             assert.equal(result, expected);
//         })
//         it('Should return last object value', () => {
//             let user = {a: 2, b: 3},
//                 expected = 3,
//                 result = Object.values(user).pop();
        
//             assert.equal(result, expected);
//         })
//     })
    
//     describe('Array objects', () => {
//         it('Should return first array value', () => {
//             let user = [1,2,3,4,5,6],
//                 expected = 1,
//                 result = user[0];
        
//             assert.equal(result, expected);
//         })
//         it('Should return first array value', () => {
//             let user = [1,2,3,4,5,6],
//                 expected = 1,
//                 result = user[0];
        
//             assert.equal(result, expected);
//         })

//     })
    
// })

// describe('Strings', () => {
//     it('Should return true if contains d char', () => {
//         let user = 'abcde',
//             expected = true,
//             result = user.includes('d');
    
//         assert.equal(result, expected);
//     })
// })


// describe('Arrays', () => {
//     it('Checked unique elements in array', () => {
//         let arr = [1,2,3,4,5],
//             expected = true,
//             result = dataOperation.checkedArray(arr);

//             assert.equal(result, expected);

//     })  

//     it('Checked unique elements in array', () => {
//         let arr = [1,2,3,4,5];
//             expected = true,
//             result = dataOperation.checkedArray(arr);

//         assert.equal(result, expected);

//     })

//     it('Checked unique elements in array', () => {
//         let arr = [1,2,1,4,5];
//             expected = true,
//             result = dataOperation.checkedArray(arr);

//         assert.equal(result, expected);

//     })

//     it('Checked unique elements in array', () => {
//         let arr = [1,2,3,4,5,5];
//             expected = true,
//             result = dataOperation.checkedArray(arr);

//         assert.equal(result, expected);

//     })
// })
// 1. Составить тест, которые проверяет что все элементы числового массва являются уникальными [1,2,3,4,5] - true; [1,1,2,3,4,5] - false 
// Составить тестирование из 4 массивов, без цикла, почитать про команду describe.


// 2. Составить класс, которые описывает локальную сеть. Свойства: массив локальных адресов, состояние сети (on, off), хост сети, если есть. 
// Методы: добавление в локальную сеть, проверка всех членов на корректность (у всех разные порты, но одинаковые ip), удаление с массива по порту.

// describe('#Meth', () => {
//     describe('# - Sum', () => {

//         context('Without numbers args', () => {
//             it('Should return 0', () => {

//                 expect('79112345678')
//                     .to.be.a('string')
//                     .that.match(/^(?:7|8)\d{10}$/)
//                     .and.equal('79112345678')

//             })

//         })
//     })
// })


// function Arr(){
//     console.log(this)
// }



// const expect = require('chai').expect;


// String.prototype.toJadenCase = function () {
//   let str = "";

//   for (let i = 0; i < this.length; i++) {
//     str += this[i];

//     if (this[i] === " ") {
//       str += this[i + 1].toUpperCase();
//       i++;
//     }
//   }

//   return str;

//     // return this.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ');
// };



// describe("Tests", () => {
//   it("test", () => {
//     var str = "how can mirrors be real if our eyes aren't real";

//     expect(str.toJadenCase())
//         .to.be.a('string')
//         .and.equal("How Can Mirrors Be Real If Our Eyes Aren't Real")

//   });
// });