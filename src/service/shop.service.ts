import { Injectable } from '@angular/core';
import {Champion} from "../entity/champion";
import {Item} from "../entity/item";
import {User} from "../entity/user";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  selectedChampion: Champion = {} as Champion;
  selectedItem: Item = {} as Item;
  user: User = {} as User;
  lastMenu: number = 0;

  championPreview: boolean = false;
  itemPreview: boolean = false;

  championsToggle: boolean = true;
  weaponsToggle: boolean = false;
  armourToggle: boolean = false;
  throwablesToggle: boolean = false;
  potionsToggle: boolean = false;

  constructor() { }

  toggleChampions() {
    this.championsToggle = true;
    this.weaponsToggle = false;
    this.armourToggle = false;
    this.throwablesToggle = false;
    this.potionsToggle = false;
    this.championPreview = false;
    this.itemPreview = false;
  }

  toggleWeapons() {
    this.championsToggle = false;
    this.weaponsToggle = true;
    this.armourToggle = false;
    this.throwablesToggle = false;
    this.potionsToggle = false;
    this.championPreview = false;
    this.itemPreview = false;
  }

  toggleArmour() {
    this.championsToggle = false;
    this.weaponsToggle = false;
    this.armourToggle = true;
    this.throwablesToggle = false;
    this.potionsToggle = false;
    this.championPreview = false;
    this.itemPreview = false;
  }

  toggleThrowables() {
    this.championsToggle = false;
    this.weaponsToggle = false;
    this.armourToggle = false;
    this.throwablesToggle = true;
    this.potionsToggle = false;
    this.championPreview = false;
    this.itemPreview = false;
  }

  togglePotions() {
    this.championsToggle = false;
    this.weaponsToggle = false;
    this.armourToggle = false;
    this.throwablesToggle = false;
    this.potionsToggle = true;
    this.championPreview = false;
    this.itemPreview = false;
  }

  toggleChampionPreview(champion: Champion) {
    this.selectedChampion = champion;
    this.championPreview = true;
    this.itemPreview = false;
    this.championsToggle = false;
    this.weaponsToggle = false;
    this.armourToggle = false;
    this.throwablesToggle = false;
    this.potionsToggle = false;
  }

  toggleItemPreview(item: Item) {
    this.selectedItem = item;
    this.championPreview = false;
    this.itemPreview = true;
    this.championsToggle = false;
    this.weaponsToggle = false;
    this.armourToggle = false;
    this.throwablesToggle = false;
    this.potionsToggle = false;
  }

  toggleLastMenu() {
    if(this.lastMenu == 1) {
      this.toggleWeapons();
    }
    if(this.lastMenu == 2) {
      this.toggleArmour();
    }
    if(this.lastMenu == 3) {
      this.toggleThrowables();
    }
    if(this.lastMenu == 4) {
      this.togglePotions();
    }
  }
}
