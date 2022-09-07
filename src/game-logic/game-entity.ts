import {User} from "../entity/user";
import {Champion} from "../entity/champion";
import {Item} from "../entity/item";
import {ItemOwnership} from "../entity/item-ownership";

export class GameEntity {

  champion: Champion = {} as Champion;
  weapon: Item = {} as Item;
  armor: Item = {} as Item;

  totalHp: number = 0;
  totalDamage: number = 0;
  totalMana: number = 0;
  totalLifesteal: number = 0;
  totalThorns: number = 0;

  constructor(){
    this.champion = {} as Champion;
    this.weapon = {} as Item;
    this.armor = {} as Item;
    this.totalHp = 0;
    this.totalDamage = 0;
    this.totalMana = 0;
    this.totalLifesteal = 0;
    this.totalThorns = 0;
  }

}
