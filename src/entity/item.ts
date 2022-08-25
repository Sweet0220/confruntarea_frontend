export class Item {

  name: string;
  bonusDamage: number;
  bonusHp: number;
  price: number;
  type: string;
  picture: string;
  nameColor: string;

  constructor(name: string, bonusDamage: number, bonusHp:number, price: number, type: string, picture: string, nameColor: string) {
    this.name = name;
    this.bonusDamage = bonusDamage;
    this.bonusHp = bonusHp;
    this.price = price;
    this.type = type;
    this.picture = picture;
    this.nameColor = nameColor;
  }

}
