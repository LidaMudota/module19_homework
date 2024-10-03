function logOwnProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key + ': ' + obj[key]);
        }
    }
}

// Пример объекта для тестирования
const myObj = {
    name: 'Lamp',
    power: 100,
    color: 'White'
};

// Вызов функции для вывода собственных свойств объекта
logOwnProperties(myObj);