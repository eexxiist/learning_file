const fs = require('fs');

fs.readFile('./example_log.txt', (err, res) => {
    if(err){
        throw err;
    }

    const text = res.toString(), //результат из текстового файла по умолчанию тип данных буффер, у буффер есть метод tostring, который возвращает изначальный текстовый файл
        result = {},
        lines = text.split('\n');

    lines.forEach(line => {
        let parts = line.split(' '),
            user = parts[1],
            count = parseInt(parts[2]);

        if(!result[user]){
            result[user] = 0;
        }

        result[user] += count;
    })

    console.log(Object.values(result).reduce((acc, item) => acc + item, 0))
})



const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, local!');
}).listen(8080);

console.log('Server running on port 8080!');

const chalk = require('chalk');

console.log(chalk.blue('Hello NodeJS'));

const text = require('./data')

console.log(chalk.blue(text))
console.log(__dirname)

