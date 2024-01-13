{
    "result": true,
    "count": 10,
    "value": "string"
}

'{"result": true, "count"....}'

const json = '{"result": true, "count": 10}';
const obj_1 = JSON.parse(json);
const obj_2 = JSON.parse(json);

obj_1.result = false;

console.log(obj_1)
console.log(obj_2)

Обращение к прототипу строку String.prototype

String.prototype.lastSymbol = function lastSymbol(){
    return this[this.length - 1];
}

String.prototype.concatCustom = function lastSymbol(...valueArg){

    if(typeof valueArg === 'string'){
        return this + valueArg;
    }

    throw new Error('Argument must be a string!')
}

String.prototype.slice = function slice(index){
    if(index >= 0 && index < this.length){
        return 'You can use this index!'
    }else{
        return 'You can not use this index!'
    }
}

const string = 'Ivan';
console.log(string.lastSymbol())
console.log(string.slice(0))
console.log(string.concatCustom('1', '2', '3'))

прочитать посмотреть про прототипные методы
1. прототипный метод для массиово, который возвращает все элементы на четных индексах
2. прототипный метод для строк, который принимает неограниченное количество строк в аргумент и возвращает
изначальную строку со всеми указанными значениями (spread)

Array.prototype.evenIndex = function evenIndex(){
    let array_2 = [];

    for( let i = 0; i < this.length; i++){
        if(i % 2 === 0){
            array_2.push(this[i])
        }
    }
    return array_2
}

startArray = [1,2,3,4,5,6]
console.log(startArray.evenIndex())

String.prototype.concatCustom = function concatCustom(valueArg){

        if(typeof valueArg === 'string'){
            return this + valueArg;
        }

        throw new Error('Argument must be a string!')
    }

const string = ['Ivan', 'Masha', 'Dima'];
console.log(string.concatCustom())

Date

let d;

d = new Date()

console.log(d)

d = new Date(2022, 8, 2, 11, 30, 0, 0)
console.log(d)

d = new Date().getTime()
console.log(d)

d = Date.now()
console.log(d)

console.log(d.toLocaleString('ru-RU'))
console.log(d.toLocaleDateString('ru-RU'))
console.log(d.toLocaleTimeString('ru-RU'))

текущее время

let d = new Date()
console.log(d)

console.log(d.getTime())
console.log(d.getFullYear())
console.log(d.getMonth())
console.log(d.getDate())
console.log(d.getDay())
console.log(d.getHours())
console.log(d.getMinutes())
console.log(d.getSeconds())
console.log(d.getMilliseconds())

let d = new Date()
console.log(d)

function formateTime(d){
    const date = (d.getDate()).toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();
    const hours = (d.getHours()).toString().padStart(2, '0');
    const minutes = (d.getMinutes().toString().padStart(2, '0'));

    return `${date}.${month}.${year}, ${hours}:${minutes}`
}

console.log(formateTime(d))

function formateRusTime(d){
    const day = d.getDay(); //0 - 6
    const dayTitle = ['Вс', 'Пн','Вт','Ср','Чт','Пт','Сб'];

    const date = (d.getDate()).toString().padStart(2, '0');
    const month = d.getMonth();

    const monthTitle = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

    const year = d.getFullYear();
    const hours = (d.getHours()).toString().padStart(2, '0');
    const minutes = (d.getMinutes().toString().padStart(2, '0'));

    return `${dayTitle[day]}, ${date} ${monthTitle[month]} ${year} , ${hours}:${minutes}`
}

console.log(formateRusTime(d))

let d = new Date()
console.log(d)

d.setFullYear(2025);
d.setMonth(2);
d.setMinutes(40);
console.log(d)

получить временную метку

let newYear2020 = new Date('January 02, 2020');
console.log(newYear2020);
console.log(newYear2020.getTime());

// использовать временную метку при создании новой даты

let date = new Date(1577912400000);
console.log(date);

let now = new Date();
console.log(now)

// установитьвременную метку

now.setTime(1577912400000)
console.log(now)

// 08.11.2023 - 4 цифры в году
console.log(moment().format('DD.MM.YYYY'));

// 08.11.23 - 2 цифры в году
console.log(moment().format('DD.MM.YY'));

// 11/08/23 - любой формат разделения
console.log(moment().format('MM/DD/YY'));

//4 - Квартал Q (ноябрь послдений квартал)
console.log(moment().format('Q'));

// 4 Nov 08 - месяц словом кратко
console.log(moment().format('Q MMM DD'));

// 4 November 08- месяц словом полностью
console.log(moment().format('Q MMMM DD'));

// задать любую дату
console.log(moment('2015/04/16', 'YYYY/MM/DD').format('Q MMMM DD'));

let date = {
    years: 2010,
    days : 15,
    months : 5,
    hours : 13
}

console.log(moment(date).format('DD.MM.YYYY HH:mm'));

let format = 'DD.MM.YYYY';

3 - среда
console.log(moment().day())

//2023- год
console.log(moment().year())

//4 - квартал
console.log(moment().quarters())

//08.08.2023 - число и год актуальные, квартал 3 (начало с июля)
console.log(moment().quarters(3).format(format))

//12.08.1994
console.log(moment().quarters(3).date(12).year(1994).format(format))

//2023
console.log(moment().get('year'))

//08.05.2023
console.log(moment().set('M', 4).format(format))

//30.05.2023
console.log(moment().set({
    date: 30,
    M: 4
}).format(format))

let m = moment()

//08.11.2023
console.log(m.format(format))

//11.11.2023 плюс 3 дня к текущей дате
console.log(m.add(3, 'days').format(format))

//14.11.2008 минус 15 лет от текущей дате
console.log(m.add(3, 'days').subtract(15, 'years').format(format))

// 17.02.1994 от 14.11.2008
console.log(m.add({
    d: 3,
    M: 3,
    y: -15
}).format(format))

let m2 = m;

m.add(20, 'y');

console.log('m', m.format(format))
console.log('m2', m2.format(format))

//чтобы не менялось значение:
let m3 = moment(m);
let m4 = m.clone();

console.log('m', m3.format(format))
console.log('m2', m4.format(format))

let format = 'DD.MM.YYYY HH:mm:ss';

//05.11.2023 00:00:00 - начало текущей недели
console.log(m.startOf('w').format(format))

//11.11.2023 23:59:59- конец текущей недели
console.log(m.endOf('w').format(format))

//in 2 months - до конца года осталось 2 месяца
console.log(m.endOf('y').fromNow())

let format = 'DD.MM.YYYY HH:mm:ss';

let m = moment().startOf('year');
let m2 = moment();

//311 - столько дней отначала года до текущей даты
console.log(m2.diff(m, 'd'))
//44 - столько недель с начала года
console.log(m2.diff(m, 'w'))

true - да, текущая дата идет после обозначенной(начала года)
console.log(m2.isAfter(m))
//false - нет, текущая дата идет после обозначенной(начала года)
console.log(m2.isBefore(m))

const obj = {
    name: 'Vasya',
    age: 26,
    job: 'web'
}

const entries = [
    ['name', 'Vasya'],
    ['age', 26],
    ['job', 'web']
]

console.log(Object.entries(obj))
[ [ 'name', 'Vasya' ], [ 'age', 26 ], [ 'job', 'web' ] ] - из объекта в массив
console.log(Object.fromEntries(entries))
{ name: 'Vasya', age: 26, job: 'web' } - из массива в объект

const map = new Map(entries)
console.log(map)

console.log(map.get('job'))
console.log(map.set('city', 'Moscow'))

console.log(map.delete('job'))
console.log(map.has('job'))
map.clear()
console.log(map.size)

for(let [key, value] of map.entries()){
    console.log(key, value)
}

for(let key of map.keys()){
    console.log(key)
}

map.forEach((val, key) => {
    console.log(key, val)
})

const array = Array.from(map)
console.log(array)

const mapObj = Object.fromEntries(map.entries())
console.log(mapObj)

const users = [
    {name: 'Elena'},
    {name: 'Alex'},
    {name: 'Irina'}
]

const visits = new Map();

visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[2], new Date(new Date().getTime() + 5000 * 60))

function lastVisit(user){
    return visits.get(user)
}

console.log(lastVisit(users[0]))
console.log(lastVisit(users[1]))
console.log(lastVisit(users[2]))

const set = new Set([1,2,3,3,3,4,5,5,6]);

console.log(set)

set.add(10).add(20).add(30).add(20)
console.log(set)
console.log(set.has(42))
console.log(set.size)
console.log(set.delete(1))
console.log(set.size)
console.log(set.clear())
console.log(set.size)

console.log(set.values())
console.log(set.keys())

for (let key of set){
    console.log(key)
}

function uniqValues(array){
    return [...new Set(array)]
}

console.log(uniqValues([1,1,2,2,3,3,3,3,3,4,5,5,6,6,7]))

let a = 'hello';
let b = 'world';
function testArray(a, b){

  let x;
  let arr1 = a.concat(b);
  const arr = Array.from(arr1);
  arr.unshift('Иванов');
  arr.reverse();
  x = arr.join('')

    console.log(x)
}

testArray(a, b)

let a = '04 April 1909 17:29'
let b = '21 July 1909 09:13'
function testDateTime(a, b) {
    let x = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let day_1 = new Date(a)
    let day_2 = new Date(b)

     if (day_1 > day_2){
        return(x[day_1.getDay(a)]);
    }else{
        return(x[day_2.getDay(b)]);
    }
}

testDateTime(a,b)

const arr = [1,2,3,1,2,5,4] // [1, 2, 3, 5, 4]
console.log(new Set(arr))

let arr = [1,2,3];
let obj_1 = {arr: arr};
arr = null;
obj_1 = null;
console.log(obj_1, arr)

const map = new Map();
let obj = {name: 'Ivan'}
map.set(obj, '...')

obj = null;

console.log(map)

const weakMap = new WeakMap();
let obj_key = {name: 'Ivan'}
let obj_value = {surname: 'Surname'}

weakMap.set(obj_key, obj_value);

obj_key = null;

console.log(weakMap.get(obj_key))

const weakMap = new WeakMap();

weakMap.set(messages[0], new Date(1991, 1, 21))
weakMap.set(messages[1], new Date(1992, 2, 22))
weakMap.set(messages[2], new Date(1993, 3, 23))
weakMap.set(messages[3], new Date(1994, 4, 24))

messages[0] = null;

console.log(weakMap.get(messages[0]))
console.log(weakMap.get(messages[1]))
console.log(weakMap.get(messages[2]))
console.log(weakMap.get(messages[3]))

const readMessanges = new WeakSet();

readMessanges.add(messages[0]);
readMessanges.add(messages[2]);

for(let index in messages){
    if(readMessanges.has(messages[index])){
        messages[index] = null;
        console.log('Сообщение прочитано');
    }
}

console.log(readMessanges.has({text: 'lalala', from: 'Ivan'}))

1. Создайте Map, где ключами будут имена студентов, а значениями будут их оценки по предметам.
Добавьте несколько студентов и их оценки, затем выведите средний балл

3. Создайте Map, чтобы реализовать простой кэш с истечением срока действия.
Добавляйте значения с временными метками и удаляйте их, когда они устаревают.
Ключами кеша будут сообщения

let messages = [
    {text: 'lalala', from: 'Ivan'},
    {text: 'bububu', from: 'Petr'},
    {text: 'opopop', from: 'Elena'},
    {text: 'wewewe', from: 'Sasha'}
]

  const students = new Map();

  students.set('Vasya', [5, 4, 2, 5, 4, 4]);
  students.set('Ilya', [5, 4, 3, 2, 4, 4]);
  students.set('Ivan', [5, 5, 3, 5, 3, 4]);
  students.set('Irina', [5, 4, 5, 5, 4, 4]);

let res = 0;

for(let val of students.values()){
    let avg = val.reduce((acc, item) => acc + item, 0) / val.length;
    res += avg;
}

res = (res / students.size).toFixed(1);

console.log(res)

2. Используйте Map для хранения информации о заказах в интернет-магазине.
Ключами могут быть уникальные идентификаторы заказов(лучше написать через функцию по принципу uuid),
а значениями — детали заказа (например, список товаров, сумма, статус).

function uuid() {
  var dt = new Date().getTime();
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
}

const order = new Map();

order.set(uuid(), ['Mango', 32, 'new']);
order.set(uuid(), ['Banana', 15, 'assembly']);
order.set(uuid(), ['Apple', 32, 'delivered']);
order.set(uuid(), ['Snack', 32, 'new'])

console.log(order)

3. Создайте Map, чтобы реализовать простой кэш с истечением срока действия.
Добавляйте значения с временными метками и удаляйте их, когда они устаревают.
Ключами кеша будут сообщения

class ExpiringCache{
    constructor(){
        this.cache = new Map();
    }

    set(key, value, expireTimeInSeconds){
        const expirationTimestamp = Date.now() + expireTimeInSeconds * 1000;
        this.cache.set(key, {value, expirationTimestamp})
    }

    get(key){
        const item = this.cache.get(key);

        if(item && item.expirationTimestamp > Date.now()){
            return item.value;
        }else{
            this.cache.delete(key)
            return null;
        }
    }

    delete(key){
        this.cache.delete(key)
    }

    clear(){
        this.cache.clear()
    }
}

const myCache = new ExpiringCache();

let uuid_1 = uuid();
let uuid_2 = uuid();

myCache.set(uuid_1, 'Hello', 4);
myCache.set(uuid_2, 'World', 10);

console.log(myCache.get(uuid_1))
console.log(myCache.get(uuid_2))

myCache.delete(uuid_1)

setTimeout(() => {
    console.log(myCache.get(uuid_1))
    console.log(myCache.get(uuid_2))
}, 6000);

первую и вторую задачи посмотреть и разобрать.

3. Создайте Map, чтобы реализовать простой кэш с истечением срока действия.
Добавляйте значения с временными метками и удаляйте их, когда они устаревают.
Ключами кеша будут сообщенияю под weakmap (только объекты )
Ключи заранее создаются через массивы

console.log(Array.from({length: 5}, (_, index) => {
    return index * 2;
}))

class ExpiringCache{
    constructor(){
        this.cache = new WeakMap();
    }

    set(key, value, expireTimeInSeconds){
        const expirationTimestamp = Date.now() + expireTimeInSeconds * 1000;
        this.cache.set(key, {value, expirationTimestamp})
    }

    get(key){
        const item = this.cache.get(key);

        if(item && item.expirationTimestamp > Date.now()){
            return item.value;
        }else{
            this.cache.delete(key)
            return null;
        }
    }

    delete(key){
        this.cache.delete(key)
    }

    clear(){
        this.cache.clear()
    }
}

const myCache = new ExpiringCache();

let uuid_1 = uuid();
let uuid_2 = uuid();

myCache.set(uuid_1, 'Hello', 4);
myCache.set(uuid_2, 'World', 10);

console.log(myCache.get(uuid_1))
console.log(myCache.get(uuid_2))

myCache.delete(uuid_1)

setTimeout(() => {
    console.log(myCache.get(uuid_1))
    console.log(myCache.get(uuid_2))
}, 6000);

function my_function(n) {
    return n == 1 ? n.toString() : my_function(n - 1) + ' ' + n;
 }

console.log(my_function(5))

function getLengthOfMissingArray(arr){
    let result = 0;
    console.log(arr)

    if(arr && arr.length === 0 || arr === null) return 0;

    arr = arr.sort((a, b) => a.length - b.length)

    for(let i = 0; i < arr.length - 1; i++){
      if(arr[i].length === 0 || arr[i] === null) return 0;
      else if(arr[i + 1].length - arr[i].length !== 1){
        result = arr[i].length + 1
      }
    }

function getLengthOfMissingArray(arrayOfArrays){
  if(!arrayOfArrays || !arrayOfArrays.length){
    return 0;
  }

  if(arrayOfArrays.some(arr => arr === null || arr.length === 0)){
    return 0;
  }

  const sortedArrays = arrayOfArrays.sort((a, b) => a.length - b.length);

  for(let i = 1; i < sortedArrays.length; i++){
    if(sortedArrays[i].length !== sortedArrays[i - 1].length + 1){
      return sortedArrays[i - 1].length + 1;
    }
  }

  return 0;
}

1. Необходимо написать расширяемый список, состоящий из li элементов.
К данному списку возможно добавить элемент в конец, удалить последний элемент.
Добавление элемента происходит через ввод сообщения в input, далее нажимаешь на кнопку.

Можно добавить только до 10 элементов

const container = document.getElementById("container"),
  input = document.getElementById("input"),
  btnAdd = document.getElementById("button_add"),
  btnDelete = document.getElementById("button_delete"),
  taskCount = document.getElementById("task_count");

function taskCounter() {
  let checkedBoxes = document.querySelectorAll(".todo__state");

  let checkedCount = Array.from(checkedBoxes).reduce((acc, item) => {
      if (item.checked) {
        return acc + 1;
      }

      return acc;
    }, 0),
    uncheckedCount = Array.from(checkedBoxes).length - checkedCount;

  taskCount.innerText = `${checkedCount} задач выполнено и ${uncheckedCount} осталось`;
}



btnAdd.addEventListener("click", () => {
  if (
    input.value.length &&
    /^[a-z0-9]{5,10}$/i.test(input.value) &&
    container.childNodes.length < 9
  ) {

    const newLabel = document.createElement("label"),
      deleteButtonItem = document.createElement("button"),
      checkBox = document.createElement("input"),
      textContainer = document.createElement("div");
    
    // Checkbox insert
    checkBox.type = "checkbox";
    checkBox.classList.add("todo__state");
    newLabel.appendChild(checkBox);

    // Text insert
    textContainer.classList.add("todo__text");
    textContainer.textContent = input.value;
    newLabel.appendChild(textContainer);

    // Delete insert
    deleteButtonItem.innerText = "x";
    deleteButtonItem.classList.add("list-item_button");
    newLabel.appendChild(deleteButtonItem);
    


    newLabel.classList.add("todo");

    deleteButtonItem.addEventListener("click", () => {
      container.removeChild(newLabel);
      taskCounter();
    });

    checkBox.addEventListener("click", () => {
      taskCounter();
    });
    

    
    container.appendChild(newLabel);
    taskCounter();
  }
});


665959,67

const numberFormat = new Intl.NumberFormat('en-GB');
let out = numberFormat.format(665959.67);
console.log(out)


out = new Intl.NumberFormat('en-GB', {
  style: 'percent'
}).format(0.55);
console.log(out)

//валюта
const c = 1234.44;

out = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'UAH'
}).format(c);

console.log(out)


единицы измерения
out = new Intl.NumberFormat('en-GB', {
  style: 'unit',
  unit: 'kilometer-per-hour'
}).format(45)

console.log(out)

out = new Intl.NumberFormat('ru-RU', {
  style: 'unit',
  unit: 'liter',
  unitDisplay: 'long'
}).format(3)

console.log(out)

const buttons = document.querySelectorAll('.btn');


const handleClick = (event) => {
  console.log('target >', event.target)
  console.log('current_target >', event.currentTarget)
  event.stopPropagation()
}

window.addEventListener('click', function(){
  console.log('window click')
})

buttons.forEach(button => {
  button.addEventListener('click', handleClick)
})


Collator, 
NumberFormat,
DateTimeFormat


localMatcher
compactDisplay 
Sign
notation (scientific, engineering, compact)
numberingSystem 




5500.51 -> 5,500.51, 5 500,51, 5.500,51

const amount = 5500.51;

const amount_en = new Intl.NumberFormat('ru', {
    style: 'decimal'
}).format(amount)

const amount_ru = new Intl.NumberFormat('en', {
    style: 'decimal'
}).format(amount)
const amount_de = new Intl.NumberFormat('de', {
    style: 'decimal'
}).format(amount)

console.log(amount_en)
console.log(amount_ru)
console.log(amount_de)


const value = 0.751;

const percen_ru = new Intl.NumberFormat('ru', {
    style: 'percent',
    minimumFractionDigits: 2
}).format(value);

const percen_en = new Intl.NumberFormat('en', {
    style: 'percent',
    minimumFractionDigits: 1
}).format(value);

const percen_turk = new Intl.NumberFormat('tr', {
    style: 'percent',
    minimumFractionDigits: 0
}).format(value);

console.log(percen_ru);
console.log(percen_en);
console.log(percen_turk);



const value = 85;

// currency - tr
const currency_tr = new Intl.NumberFormat('tr', {
    style: 'currency',
    currency: 'TRY'
}).format(value)


// liter - zh (китайский)
const litres_zh = new Intl.NumberFormat('zh', {
    style: 'unit',
    unit: 'liter',
    unitDisplay: 'long'
}).format(value)


// км - hi (индия)
const kilometres_hi = new Intl.NumberFormat('hi', {
    style: 'unit',
    unit: 'kilometer-per-hour'
}).format(value)

console.log(currency_tr);
console.log(litres_zh);
console.log(kilometres_hi);





const date = new Date(2023, 11, 9)
date.setHours(date.getHours() + 3)

console.log(date)

console.log(new Intl.DateTimeFormat('ru-RU').format(date))
console.log(new Intl.DateTimeFormat('de-DE').format(date))
console.log(new Intl.DateTimeFormat('en-GB').format(date))
console.log(new Intl.DateTimeFormat('en-US').format(date))



const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
    timeZoneName: 'short',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true 
}


console.log(new Intl.DateTimeFormat('en-US', options).format(date))

const sum = (num_1, num_2) => num_1 + num_2;

console.log(sum( -22, 33))