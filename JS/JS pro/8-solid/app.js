class Billing {
    constructor(amount) {
      this.amount = amount;
    }
  
    calculateTotal() {
      return this.amount;
    }
  }
  
  class fixBilling extends Billing {
    constructor(amount) {
      super(amount);
    }
  
    calculateTotal() {
      return this.amount;
    }
  }
  
  class hourBilling extends Billing {
    constructor(amount, hours) {
      super(amount);
      this.hours = hours;
    }
  
    calculateTotal() {
      return this.amount * this.hours;
    }
  }
  
  class itemBilling extends Billing {
    constructor(amount, itemCount) {
      super(amount);
      this.itemCount = itemCount;
    }
  
    calculateTotal() {
      return this.amount * this.itemCount;
    }
  }

const fixed = new fixBilling(500);
console.log("Fixed Total:", fixed.calculateTotal()); 

const hourly = new hourBilling(100, 8);
console.log("Hour Total:", hourly.calculateTotal()); 

const items = new itemBilling(350, 4);
console.log("Item Total:", items.calculateTotal()); 
