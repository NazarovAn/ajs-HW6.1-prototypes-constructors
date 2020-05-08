export default function showDescriptionBar(char) {
  const icons = {
    bowman: '\uD83D\uDE20',
    swordsman: '\uD83D\uDE21',
    magician: '\uD83E\uDDD0',
    daemon: '\uD83D\uDC7F',
    undead: '\uD83D\uDC80',
    zombie: '\uD83E\uDDDF',
    attack: '\u2694',
    shield: '\uD83D\uDEE1',
    health: '\u2764',
  };
  const {
    name, type, health, level, attack, defence,
  } = char;
  const typeIcon = type.toLowerCase();
  const shortName = name.substr(0, 1);
  return `${icons[typeIcon]}${shortName}(${level})${icons.attack}${attack}${icons.shield}${defence}${icons.health}${health}`;
}
