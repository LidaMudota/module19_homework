// Класс Appliance (электроприбор)
class Appliance {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }

    // Метод для включения прибора
    plugIn() {
        this.isPlugged = true;
        console.log(`${this.name} подключен к розетке.`);
    }

    // Метод для выключения прибора
    unplug() {
        this.isPlugged = false;
        console.log(`${this.name} отключен от розетки.`);
    }
}

// Класс Lamp, наследуемый от Appliance
class Lamp extends Appliance {
    constructor(name, power, brightness) {
        super(name, power);
        this.brightness = brightness;
    }
}

// Класс Computer, наследуемый от Appliance
class Computer extends Appliance {
    constructor(name, power, brand) {
        super(name, power);
        this.brand = brand;
    }
}

// Пример использования
let lamp = new Lamp("Настольная лампа", 40, "Средний");
let computer = new Computer("Ноутбук", 65, "Dell");

// Включаем приборы
lamp.plugIn();
computer.plugIn();