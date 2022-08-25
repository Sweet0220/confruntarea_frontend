import {Champion} from "./champion";
import {User} from "./user";

export class ChampionOwnership {

  id: number;
  level: number;
  champion: Champion;
  user: User;

  constructor(id: number, level: number, champion: Champion, user: User) {
    this.id = id;
    this.level = level;
    this.champion = champion;
    this.user = user;
  }

}
