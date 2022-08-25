export class Ability {

  name: string;
  type: string;
  healing: number;
  damage: number;
  picture: string;
  manaCost: number;

  constructor(name: string, type: string, healing: number, damage: number, picture: string, manaCost: number) {
    this.name = name;
    this.type = type;
    this.healing = healing;
    this.damage = damage;
    this.picture = picture;
    this.manaCost = manaCost;
  }

}
