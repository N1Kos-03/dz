function Character(race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
}

Character.prototype.speak = function() {
  console.log(`${this.name} говорит на языке: ${this.language}`);
};

function Orc(name, weapon) {
  Character.call(this, "Орк", name, "Орочий");
  this.weapon = weapon;
}
Orc.prototype = Object.create(Character.prototype);
Orc.prototype.constructor = Orc;
Orc.prototype.stroke = function() {
  console.log(`${this.name} наносит удар оружием: ${this.weapon}`);
};

function Elf(name, weapon) {
  Character.call(this, "Эльф", name, "Эльфский");
  this.weapon = weapon;
}
Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;
Elf.prototype.spell = function() {
  console.log(`${this.name} произносит заклинание...`);
};

Elf.prototype.createSpell = function() {
  console.log(`${this.name} создает новое эльфское заклинание из древних рун.`);
};

const orc1 = new Orc("Грог", "Топор");
const elf1 = new Elf("Мифлас", "Посох");

orc1.speak();        
orc1.stroke(); 
elf1.speak();              
elf1.spell();        
elf1.createSpell(); 

