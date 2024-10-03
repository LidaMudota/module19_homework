// Родительская функция Appliance
function Appliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

// Метод для включения прибора
Appliance.prototype.plugIn = function() {
    this.isPlugged = true;
    console.log(this.name + " подключен к розетке.");
};

// Метод для выключения прибора
Appliance.prototype.unplug = function() {
    this.isPlugged = false;
    console.log(this.name + " отключен от розетки.");
};

// Метод для расчета потребляемой мощности
Appliance.prototype.getPowerUsage = function() {
    if (this.isPlugged) {
        return this.power;
    }
    return 0;
};

// Конструктор Lamp, наследуемый от Appliance
function Lamp(name, power, brightness) {
    Appliance.call(this, name, power);
    this.brightness = brightness;
}

Lamp.prototype = Object.create(Appliance.prototype);
Lamp.prototype.constructor = Lamp;

// Конструктор Computer, наследуемый от Appliance
function Computer(name, power, brand) {
    Appliance.call(this, name, power);
    this.brand = brand;
}

Computer.prototype = Object.create(Appliance.prototype);
Computer.prototype.constructor = Computer;

// Пример использования
let lamp = new Lamp("Настольная лампа", 40, "Средний");
let computer = new Computer("Ноутбук", 65, "Dell");

// Включаем приборы
lamp.plugIn();
computer.plugIn();

// Считаем общую потребляемую мощность
let totalPower = lamp.getPowerUsage() + computer.getPowerUsage();
console.log("Общая потребляемая мощность: " + totalPower + " Вт");