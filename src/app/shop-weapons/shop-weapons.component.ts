import { Component, OnInit } from '@angular/core';
import {Item} from "../../entity/item";
import {ItemService} from "../../service/item.service";
import {User} from "../../entity/user";
import {Champion} from "../../entity/champion";
import {ShopService} from "../../service/shop.service";
import {ItemOwnershipService} from "../../service/item-ownership.service";
import {ItemOwnership} from "../../entity/item-ownership";

@Component({
  selector: 'app-shop-weapons',
  templateUrl: './shop-weapons.component.html',
  styleUrls: ['./shop-weapons.component.css']
})
export class ShopWeaponsComponent implements OnInit {

  user: User = JSON.parse(<any>localStorage.getItem("principal"));

  weapons: Array<Item> = [];

  links: Array<ItemOwnership> = [];

  constructor(private itemService: ItemService, private shopService: ShopService, private itemLinkService: ItemOwnershipService) { }

  async ngOnInit() {
    this.getWeapons();
    this.getLinks();

  }

  getWeapons() {
    this.itemService.getItemsByType("WEAPON").subscribe(weapons => {
      this.weapons = weapons;
    });
  }

  toggleChampionPreview(item: Item) {
    this.shopService.lastMenu = 1;
    this.shopService.toggleItemPreview(item);
  }

  getLinks() {
    this.itemLinkService.getByUsername(this.user.username).subscribe(data => {
      this.links = data;
    });
  }

  getItemCount(item: Item): any {
    for(let link of this.links) {
      if(link.item.name == item.name) {
        return link.itemCount;
      }
    }
    return '';
  }

}
