export default function Character(name, type) {
  const characters = {
    bowman: { attack: 25, defence: 25 },
    swordsman: { attack: 40, defence: 10 },
    magician: { attack: 10, defence: 40 },
    undead: { attack: 25, defence: 25 },
    zombie: { attack: 40, defence: 10 },
    daemon: { attack: 10, defence: 40 },
  };
  if (name.length < 2 || name.length > 10) {
    throw new Error('Имя персонажа должно быть от 2 до 10 символов');
  }
  const typeKey = type.toLowerCase();

  if (!Object.keys(characters).includes(typeKey)) {
    throw new Error('Тип персонажа должен быть одним из следующих: \n Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
  }

  this.name = name;
  this.type = type;
  this.health = 100;
  this.level = 1;
  this.attack = characters[typeKey].attack;
  this.defence = characters[typeKey].defence;
}
