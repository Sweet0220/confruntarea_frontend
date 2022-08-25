export class Champion {

  name: string;
  hp: number;
  baseDamage: number;
  price: number;
  mana: number;
  picture: string;
  nameColor: string;

  constructor(name: string, hp: number, baseDamage: number, price: number, mana: number, picture: string, nameColor: string) {
    this.name = name;
    this.hp = hp;
    this.baseDamage = baseDamage;
    this.price = price;
    this.mana = mana;
    this.picture = picture;
    this.nameColor = nameColor;
  }

}
