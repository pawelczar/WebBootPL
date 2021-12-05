function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;

    this.printInfo = function () {
        console.log(`This is ${this.brand} car, ${this.model} model from ${this.year} year`);
    }
}

const jeep = new Car('jeep', 'wrangler', 1998);
jeep.printInfo();