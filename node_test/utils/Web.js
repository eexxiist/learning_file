// 2. Составить класс, которые описывает локальную сеть. Свойства: массив локальных адресов, состояние сети (on, off), хост сети, если есть. 
// Методы: добавление в локальную сеть, проверка всех членов на корректность (у всех разные порты, но одинаковые ip), удаление с массива по порту.

class Web{
    constructor(localArg, portsArg, statusArg = false, hostArg = ''){
        this.localAddress = localArg;
        this.ipArray = portsArg.map(el => `${localArg}:${el}`); // 127.0.0.1:3000
        this.status = statusArg;
        this.host = (portsArg.includes(hostArg)) ? `${localArg}:${hostArg}`: ''; // '127.0.0.1:5000'
    }

    addLocalWeb(portArg = '5500'){
        if(this.ipArray.includes(`${this.localAddress}:${portArg}`)){
            throw new Error('double ip value')
        }else{
            this.ipArray.push(`${this.localAddress}:${portArg}`)
        }
    }

    deletePort(deletePortArg = '8000'){
        if(this.ipArray.includes(`${this.localAddress}:${deletePortArg}`)){
            this.ipArray = this.ipArray.filter(el => el !== `${this.localAddress}:${deletePortArg}`);
        }else{
            throw new Error('No value')
        }
    }

    checkIpArray(){
        let portArray = this.ipArray.map(el => el.split(':')[1])

        for(let i = 0; i < portArray.length; i++){
            for(let j = i + 1; j < portArray.length; j++){
                if(portArray[i] === portArray[j]){
                    return false;
                }
            }
        }
        return true;
    }
}

try{
    const webInfo = new Web('127.0.0.1', ['5500', '3000', '3000', '5501', '8080'], true, '0');
    console.log(webInfo);

    webInfo.addLocalWeb('5000');
    console.log(webInfo);

    webInfo.deletePort('8080');
    console.log(webInfo);


    console.log(webInfo.checkIpArray())
}catch(error){
    console.log(error.message);
}

// массивы объекты классы тестирование - теория и составить задачи по уровню