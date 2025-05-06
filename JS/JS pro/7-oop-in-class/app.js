class Character {
  constructor(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
  }

  speak() {
    console.log(`${this.name} говорит на языке: ${this.language}`);
  }
}

class Orc extends Character {
  constructor(name, weapon) {
    super("Орк", name, "Орочий");
    this.weapon = weapon;
  }

  speak() {
    console.log(`${this.name} рычит на ${this.language} языке.`);
  }

  stroke() {
    console.log(`${this.name} наносит удар оружием: ${this.weapon}`);
  }
}

class Elf extends Character {
  constructor(name, weapon) {
    super("Эльф", name, "Эльфский");
    this.weapon = weapon;
  }

  speak() {
    console.log(`${this.name} говорит на ${this.language}.`);
  }

  spell() {
    console.log(`${this.name} произносит заклинание...`);
  }

  createSpell() {
    console.log(`${this.name} создает новое эльфское заклинание из древних рун.`);
  }
}


const orc1 = new Orc("Грог", "Топор");
const elf1 = new Elf("Мифлас", "Посох");

orc1.speak();       
orc1.stroke();      

elf1.speak();        
elf1.spell();        
elf1.createSpell();  
