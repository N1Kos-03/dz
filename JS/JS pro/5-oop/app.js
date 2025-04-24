function Character(race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
}

Character.prototype.говорить = function() {
  console.log(`${this.name} говорит на языке: ${this.language}`);
};

function Orc(name, weapon) {
  Character.call(this, "Орк", name, "Орочий");
  this.weapon = weapon;
}
Orc.prototype = Object.create(Character.prototype);
Orc.prototype.constructor = Orc;
Orc.prototype.удар = function() {
  console.log(`${this.name} наносит удар оружием: ${this.weapon}`);
};

function Elf(name, weapon) {
  Character.call(this, "Эльф", name, "Эльфский");
  this.weapon = weapon;
}
Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;
Elf.prototype.заклинание = function() {
  console.log(`${this.name} произносит заклинание...`);
};

Elf.prototype.создатьЗаклинание = function() {
  console.log(`${this.name} создает новое эльфское заклинание из древних рун.`);
};

const orc1 = new Orc("Грог", "Топор");
const elf1 = new Elf("Мифлас", "Посох");

orc1.говорить();        
orc1.удар(); 
elf1.говорить();              
elf1.заклинание();        
elf1.создатьЗаклинание(); 

