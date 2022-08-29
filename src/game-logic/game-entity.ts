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

  constructor(){}

}
