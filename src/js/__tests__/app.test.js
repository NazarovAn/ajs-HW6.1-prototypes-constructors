import Character from '../app';

test('Wrong name', () => {
  const received = () => new Character('K', 'Bowman');
  expect(received).toThrowError(new Error('Имя персонажа должно быть от 2 до 10 символов'));
});

test('Wrong type', () => {
  const received = () => new Character('Bow', 'Bow');
  expect(received).toThrowError(new Error('Тип персонажа должен быть одним из следующих: \n Bowman, Swordsman, Magician, Daemon, Undead, Zombie'));
});

describe('new Character', () => test.each([
  ['Bowman', 'Bowman, Bowman', {
    name: 'Bowman', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  }],
  ['Swordsman', 'Swordsman, Swordsman', {
    name: 'Swordsman', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
  }],
  ['Magician', 'Magician, Magician', {
    name: 'Magician', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
  }],
  ['Undead', 'Undead, Undead', {
    name: 'Undead', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
  }],
  ['Zombie', 'Zombie, Zombie', {
    name: 'Zombie', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  }],
  ['Daemon', 'Daemon, Daemon', {
    name: 'Daemon', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  }],
])(
  ('%s'),
  (level, props, expected) => {
    const args = props.split(', ');
    const received = new Character(args[0], args[1]);
    expect(received).toEqual(expected);
  },
));
