import {Item} from "./item";
import {User} from "./user";

export class ItemOwnership {

  id: number;
  itemCount: number;
  item: Item;
  user: User;

  constructor(id: number, itemCount: number, item: Item, user: User) {
    this.id = id;
    this.itemCount = itemCount;
    this.item = item;
    this.user = user;
  }

}
