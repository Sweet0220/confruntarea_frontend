import { Component, OnInit } from '@angular/core';
import {Item} from "../../entity/item";
import {ItemService} from "../../service/item.service";
import {User} from "../../entity/user";
import {ItemOwnershipService} from "../../service/item-ownership.service";
import {ItemOwnership} from "../../entity/item-ownership";
import {ShopService} from "../../service/shop.service";

@Component({
  selector: 'app-shop-throwables',
  templateUrl: './shop-throwables.component.html',
  styleUrls: ['./shop-throwables.component.css']
})
export class ShopThrowablesComponent implements OnInit {

  throwables: Array<Item> = [];
  user: User = JSON.parse(<any>localStorage.getItem("principal"));
  links: Array<ItemOwnership> = [];

  constructor(private itemService: ItemService, private itemLinkService: ItemOwnershipService, private shopService: ShopService) { }

  ngOnInit(): void {
    this.getThrowables();
    this.getLinks();
  }

  getThrowables() {
    this.itemService.getItemsByType("THROWABLE").subscribe(throwables => {
      this.throwables = throwables;
    });
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
    this.shopService.lastMenu = 3;
    this.shopService.toggleItemPreview(item);
  }

}
