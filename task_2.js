function hasProperty(propName, obj) {
    return obj.hasOwnProperty(propName);
}

// Пример объекта для тестирования
const myObj = {
    name: 'Lamp',
    power: 100,
    color: 'White'
};

// Проверяем, есть ли у объекта свойство 'power'
console.log(hasProperty('power', myObj)); // true

// Проверяем, есть ли у объекта свойство 'height'
console.log(hasProperty('height', myObj)); // false