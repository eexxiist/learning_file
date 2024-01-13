// Проверьте, что этот объект не пустой и что в нем есть ключ age.

// let user = {
//     name: "John",
//     age: 30
//   };

// console.log(user?.age)

// for(let key in user){
//     console.log(key)
// }

// Получите из этого массива объект, где name == "Bob" и сохраните это в какой-либо переменной.

// let user_2 = [
//     {
//       name: "John",
//       age: 30
//     },
//     {
//       name: "Bob",
//       age: 21
//     },
//     {
//       name: "Anna",
//       age: 19
//     }
//     ]

// const nameUser = user_2.filter(person => {
//     if(person.name === 'Bob'){
//         return true
//     }
// })

// console.log(nameUser)

// Удалите из массива объектов объект с name == "Anna".

// if(user_2.includes('Anna')){
//     user_2.filter(deleteName => deleteName.name !== 'Anna')
// }

// console.log(user_2)

// let obj = {name:"dog",legs:4,color:"white"};

// function animal(obj){
//     return `This ${obj.color} ${obj.name} has ${obj.legs}`
//   }