function createEmptyObject() {
    return Object.create(null);
}

// Создание пустого объекта без прототипа
const emptyObj = createEmptyObject();

// Проверка: у объекта не должно быть прототипа
console.log(emptyObj); // {}
console.log(Object.getPrototypeOf(emptyObj)); // null
console.log(emptyObj.toString); // undefined, так как объект не наследует методы от Object.prototype