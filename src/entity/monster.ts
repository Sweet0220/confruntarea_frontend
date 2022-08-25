export class Monster {

  name: string;
  level: number;
  hp: number;
  baseDamage: number;
  moneyReward: number;
  expReward: number;
  picture: string;
  nameColor: string;

  constructor(name: string, level: number, hp: number, baseDamage: number, moneyReward: number, expReward: number, picture: string, nameColor: string) {
    this.name = name;
    this.level = level;
    this.hp = hp;
    this.baseDamage = baseDamage;
    this.moneyReward = moneyReward;
    this.expReward = expReward;
    this.picture = picture;
    this.nameColor = nameColor;
  }

}
