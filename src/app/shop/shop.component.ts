import { Component, OnInit } from '@angular/core';
import {User} from "../../entity/user";
import {ShopService} from "../../service/shop.service";
import {Champion} from "../../entity/champion";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  user: User = {} as User

  constructor(public shopService: ShopService) { }

  ngOnInit(): void {
    this.shopService.user = JSON.parse(<any>localStorage.getItem("principal"));
    this.user = this.shopService.user;
  }

  toggleChampions() {
    this.shopService.toggleChampions();
  }

  toggleWeapons() {
    this.shopService.toggleWeapons();
  }

  toggleArmour() {
    this.shopService.toggleArmour();
  }

  toggleThrowables() {
    this.shopService.toggleThrowables();
  }

  togglePotions() {
    this.shopService.togglePotions();
  }

  toggleChampionPreview(champion: Champion) {
    this.shopService.toggleChampionPreview(champion);
  }

  get championPreview() {
    return this.shopService.championPreview;
  }

  get itemPreview() {
    return this.shopService.itemPreview;
  }

  get championsToggle() {
    return this.shopService.championsToggle;
  }

  get weaponsToggle() {
    return this.shopService.weaponsToggle;
  }

  get armourToggle() {
    return this.shopService.armourToggle;
  }

  get throwablesToggle() {
    return this.shopService.throwablesToggle;
  }

  get potionsToggle() {
    return this.shopService.potionsToggle;
  }

}
