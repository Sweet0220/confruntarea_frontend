import { Component, OnInit } from '@angular/core';
import {Item} from "../../entity/item";
import {ItemService} from "../../service/item.service";
import {User} from "../../entity/user";
import {ItemOwnership} from "../../entity/item-ownership";
import {ItemOwnershipService} from "../../service/item-ownership.service";
import {ShopService} from "../../service/shop.service";

@Component({
  selector: 'app-shop-armour',
  templateUrl: './shop-armour.component.html',
  styleUrls: ['./shop-armour.component.css']
})
export class ShopArmourComponent implements OnInit {

  armour: Array<Item> = [];
  user: User = JSON.parse(<any>localStorage.getItem("principal"));
  links: Array<ItemOwnership> = [];

  constructor(private itemService: ItemService, private itemLinkService: ItemOwnershipService, private shopService: ShopService) { }

  ngOnInit(): void {
    this.getArmour();
    this.getLinks();
  }

  getArmour() {
    this.itemService.getItemsByType("Armour").subscribe(armour => {
      this.armour = armour;
    })
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

  toggleChampionPreview(item: Item) {
    this.shopService.lastMenu = 2;
    this.shopService.toggleItemPreview(item);
  }

}
