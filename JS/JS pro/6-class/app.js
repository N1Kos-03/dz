class Car {
  #marka;
  #model;
  #run;

  constructor(marka, model, run) {
    this.#marka = marka;
    this.#model = model;
    this.#run = run;
  }

  get mileage() {
    return this.#run;
  }

  set mileage(run) {
    if (run >= 0) {
      this.#run = run;
    } else {
      console.log("Пробег не может быть отрицательным");
    }
  }

  info() {
    console.log(`Марка: ${this.#marka}, Модель: ${this.#model}, Пробег: ${this.#run}`);
  }
}

const car = new Car('Mercedes-Benz', 'S-Class', 50000);
car.info();            

car.mileage = 60000;   
console.log(car.mileage); 
