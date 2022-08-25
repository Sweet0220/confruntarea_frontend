import { Component, OnInit } from '@angular/core';
import {ShopService} from "../../../service/shop.service";
import {Item} from "../../../entity/item";
import {HttpClient} from "@angular/common/http";
import {ItemOwnership} from "../../../entity/item-ownership";
import {ItemOwnershipService} from "../../../service/item-ownership.service";
import {User} from "../../../entity/user";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-item-preview',
  templateUrl: './item-preview.component.html',
  styleUrls: ['./item-preview.component.css']
})
export class ItemPreviewComponent implements OnInit {

  user: User = JSON.parse(<any>localStorage.getItem("principal"));
  currentItem: Item = {} as Item;
  lore: string = "";
  links: Array<ItemOwnership> = [];
  loading: boolean = false;
  insufficient: boolean = false;
  buy: boolean = false;
  count: any = null;
  stat1: string = "";
  stat2: string = "";
  title1: string = "";
  title2: string = "";

  constructor(private shopService: ShopService, private http: HttpClient, private itemLinkService: ItemOwnershipService, private userService: UserService) { }

  async ngOnInit() {
    this.initializeStats();
    this.currentItem = this.shopService.selectedItem;
    this.getLinks();
    await new Promise(f => setTimeout(f, 20));
    this.getItemCount(this.currentItem);
    let loreFile: String = this.currentItem.picture.slice(0, -4);
    loreFile = loreFile + ".txt";
    this.http.get('assets/lore/items/' + loreFile, {responseType: 'text'}).subscribe(data => {
      this.lore = data;
    });

  }

  initializeStats() {
    if(this.shopService.lastMenu == 1) {
      this.stat1 = "Lifesteal.png";
      this.stat2 = "Damage.png";
      this.title1 = "LIFESTEAL";
      this.title2 = "DAMAGE";
    }
    if(this.shopService.lastMenu == 2) {
      this.stat1 = "Resilience.png";
      this.stat2 = "Thorns.png";
      this.title1 = "RESILIENCE";
      this.title2 = "THORNS";
    }
    if(this.shopService.lastMenu == 3) {
      this.stat1 = "Lifesteal.png";
      this.stat2 = "Damage.png";
      this.title1 = "LIFESTEAL";
      this.title2 = "DAMAGE";
    }
    if(this.shopService.lastMenu == 4) {
      this.stat1 = "Heart.png";
      this.stat2 = "Mana.png";
      this.title1 = "HEALING";
      this.title2 = "MANA REGEN";
    }
  }

  toggleLastMenu() {
    this.shopService.toggleLastMenu();
  }

  getLinks() {
    this.itemLinkService.getByUsername(this.user.username).subscribe(data => {
      this.links = data;
    });
  }

  getItemCount(item: Item) {
    for(let link of this.links) {
      if(link.item.name == item.name) {
        this.count = link.itemCount;
      }
    }
  }

  async buyItem() {

    this.loading = true;
    await new Promise(f => setTimeout(f, 400));
    for(let link of this.links) {
      if(link.item.name == this.currentItem.name) {
        link.itemCount++;
        this.user.funds -= this.currentItem.price;
        this.itemLinkService.updateCount(link.id, link).subscribe(_ => {
          this.userService.purchase(this.user.username, this.currentItem.price).subscribe(_ => {
            this.userService.getUserByUsername(this.user.username).subscribe(updatedUser => {
              this.user = updatedUser;
              localStorage.setItem("principal", JSON.stringify(this.user));
              this.shopService.user = this.user;
              this.getLinks();
              this.getItemCount(this.currentItem);
              this.loading = false;
            })
          });
        })
      }
    }

  }

}
