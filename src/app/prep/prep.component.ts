import { Component, OnInit } from '@angular/core';
import {ChampionOwnership} from "../../entity/champion-ownership";
import {Champion} from "../../entity/champion";
import {ChampionOwnershipService} from "../../service/champion-ownership.service";
import {User} from "../../entity/user";
import {Item} from "../../entity/item";
import {ItemOwnership} from "../../entity/item-ownership";
import {ItemOwnershipService} from "../../service/item-ownership.service";
import {GameEntity} from "../../game-logic/game-entity";
import {Observable} from "rxjs";

@Component({
  selector: 'app-prep',
  templateUrl: './prep.component.html',
  styleUrls: ['./prep.component.css']
})
export class PrepComponent implements OnInit {

  currentUser: User = JSON.parse(<any>localStorage.getItem("principal"));
  currentGameEntity: GameEntity = JSON.parse(<any>localStorage.getItem("game_entity"));

  championTitle: string = "";
  weaponTitle: string = "";
  armorTitle: string = "";

  baseHp = 0;
  baseDamage = 0;
  baseMana = 0;

  totalHp = 0;
  totalDamage = 0;
  totalMana = 0;
  totalLifesteal = 0;
  totalThorns = 0;

  chosenChampion: Champion = {} as Champion;
  chosenWeapon: Item = {} as Item;
  chosenArmor: Item = {} as Item;

  champion_image: string = "assets/icons/champion_placeholder.png";
  armor_image: string = "assets/icons/armor_placeholder.png";
  weapon_image: string = "assets/icons/weapon_placeholder.png";

  itemLinks: Array<ItemOwnership> = [];

  champions: Array<Champion> = [];
  weapons: Array<Item> = [];
  armor: Array<Item> = [];
  others: Array<Item> = [];

  weaponTrigger: boolean = true;
  armorTrigger: boolean = true;
  otherTrigger: boolean = true;

  constructor(private championLinkService: ChampionOwnershipService, private itemLinkService: ItemOwnershipService) { }

  ngOnInit(): void {
    console.log(this.chosenChampion);
    this.loadAllOwnedChampions();
    this.loadAllItems()
    console.log(this.currentGameEntity);
    this.championTitle = "HP: 0\nDAMAGE: 0\nMANA: 0";
    this.armorTitle = "RESILIENCE: 0\nTHORNS: 0";
    this.weaponTitle = "LIFESTEAL: 0\nDAMAGE: 0";
    this.loadSelectedEntity();
  }

  loadAllOwnedChampions() {
    this.championLinkService.getChampionOwnershipsByUsername(this.currentUser.username).subscribe(data => {
      for(let link of data) {
        this.champions.push(link.champion);
      }
    });
  }

  loadAllItems() {
    this.weapons = [];
    this.armor = [];
    this.others = [];
    this.itemLinks = [];
    this.itemLinkService.getByUsername(this.currentUser.username).subscribe(data => {
      this.itemLinks = data;
      for(let link of data) {
        if(link.item.type == "Weapon" && link.itemCount > 0) {
          this.weapons.push(link.item);
        }
        if(link.item.type == "Armour" && link.itemCount > 0) {
          this.armor.push(link.item);
        }
        if((link.item.type == "Potion" || link.item.type == "Throwable") && link.itemCount > 0) {
          this.others.push(link.item);
        }
      }
    });
  }

  getItemCount(item: any): any {
    for(let link of this.itemLinks) {
      if(link.item.name == item.name) {
        return link.itemCount;
      }
    }
  }

  async chooseChampion(champion: Champion) {
    this.champion_image = "assets/sprites/champions/" + champion.picture;
    this.chosenChampion = champion;
    this.currentGameEntity.champion = champion;
    this.setBaseStats(champion);
    if(Object.keys(this.chosenWeapon).length != 0) {
      this.increaseItemCount(this.chosenWeapon).subscribe();
    }
    if(Object.keys(this.chosenArmor).length != 0) {
      this.increaseItemCount(this.chosenArmor).subscribe();
    }
    this.armor_image = "assets/icons/armor_placeholder.png";
    this.weapon_image = "assets/icons/weapon_placeholder.png";
    await new Promise(f => setTimeout(f, 250));
    this.chosenWeapon = {} as Item;
    this.chosenArmor = {} as Item;
    let weaponContainer = <HTMLDivElement>document.getElementById("weapon_container");
    let armorContainer = <HTMLDivElement>document.getElementById("armor_container");
    this.removeChildrenFromContainer(weaponContainer);
    this.removeChildrenFromContainer(armorContainer);
    this.loadAllItems();
    this.reloadContainers();
    this.currentGameEntity.armor = {} as Item;
    this.currentGameEntity.weapon = {} as Item;
    localStorage.setItem("game_entity", JSON.stringify(this.currentGameEntity));
  }

  async deselectChampion() {
    if(Object.keys(this.chosenChampion).length != 0) {
      this.champion_image = "assets/icons/champion_placeholder.png";
      this.armor_image = "assets/icons/armor_placeholder.png";
      this.weapon_image = "assets/icons/weapon_placeholder.png";
      this.resetAllStats();
      this.championTitle = "HP: 0\nDAMAGE: 0\nMANA: 0";
      this.armorTitle = "RESILIENCE: 0\nTHORNS: 0";
      this.weaponTitle = "LIFESTEAL: 0\nDAMAGE: 0";

      if(Object.keys(this.chosenWeapon).length != 0) {
        this.increaseItemCount(this.chosenWeapon).subscribe();
      }

      if(Object.keys(this.chosenArmor).length != 0) {
        this.increaseItemCount(this.chosenArmor).subscribe();
      }

      await new Promise(f => setTimeout(f, 200));
      let weaponContainer = <HTMLDivElement>document.getElementById("weapon_container");
      let armorContainer = <HTMLDivElement>document.getElementById("armor_container");
      this.removeChildrenFromContainer(weaponContainer);
      this.removeChildrenFromContainer(armorContainer);
      this.loadAllItems();
      this.reloadContainers();

      this.chosenChampion = {} as Champion;
      this.chosenWeapon = {} as Item;
      this.chosenArmor = {} as Item;

      this.currentGameEntity.champion = {} as Champion;
      this.currentGameEntity.weapon = {} as Item;
      this.currentGameEntity.armor = {} as Item;

      localStorage.setItem("game_entity", JSON.stringify(this.currentGameEntity));
    }
  }

  loadSelectedEntity() {
    if(Object.keys(this.currentGameEntity.champion).length != 0) {
      this.chosenChampion = this.currentGameEntity.champion;
      this.champion_image = "assets/sprites/champions/" + this.chosenChampion.picture;
      this.setBaseStats(this.chosenChampion);
    }

    if(Object.keys(this.currentGameEntity.weapon).length != 0) {
      this.chosenWeapon = this.currentGameEntity.weapon;
      this.weapon_image = "assets/sprites/items/" + this.chosenWeapon.picture;
      this.addWeaponStats(this.chosenWeapon);
    }

    if(Object.keys(this.currentGameEntity.armor).length != 0) {
      this.chosenArmor = this.currentGameEntity.armor;
      this.armor_image = "assets/sprites/items/" + this.chosenArmor.picture;
      this.addArmorStats(this.chosenArmor);
    }
  }

  async chooseWeapon(weapon: Item) {
    if(Object.keys(this.chosenChampion).length != 0) {
      this.weapon_image = "assets/sprites/items/" + weapon.picture;
      if(Object.keys(this.chosenWeapon).length != 0) {
        this.increaseItemCount(this.chosenWeapon).subscribe();
      }
      this.chosenWeapon = weapon;
      this.currentGameEntity.weapon = weapon;
      this.addWeaponStats(weapon);
      this.decreaseItemCount(weapon).subscribe();
      await new Promise(f => setTimeout(f, 200));
      let weaponContainer = <HTMLDivElement>document.getElementById("weapon_container");
      let armorContainer = <HTMLDivElement>document.getElementById("armor_container");
      this.removeChildrenFromContainer(weaponContainer);
      this.removeChildrenFromContainer(armorContainer);
      this.loadAllItems();
      this.reloadContainers();
      localStorage.setItem("game_entity", JSON.stringify(this.currentGameEntity));
    }
  }

  async deselectWeapon() {
    if(Object.keys(this.chosenWeapon).length != 0) {
      this.weapon_image = "assets/icons/weapon_placeholder.png";
      this.totalDamage -= this.chosenWeapon.bonusDamage;
      this.totalLifesteal -= this.chosenWeapon.bonusHp;
      this.weaponTitle = "LIFESTEAL: 0\nDAMAGE: 0";

      this.increaseItemCount(this.chosenWeapon).subscribe();

      await new Promise(f => setTimeout(f, 200));
      let weaponContainer = <HTMLDivElement>document.getElementById("weapon_container");
      let armorContainer = <HTMLDivElement>document.getElementById("armor_container");
      this.removeChildrenFromContainer(weaponContainer);
      this.removeChildrenFromContainer(armorContainer);
      this.loadAllItems();
      this.reloadContainers();

      this.chosenWeapon = {} as Item;
      this.currentGameEntity.weapon = {} as Item;
      localStorage.setItem("game_entity", JSON.stringify(this.currentGameEntity));

    }
  }

  async deselectArmor() {
    if(Object.keys(this.chosenArmor).length != 0) {
      this.armor_image = "assets/icons/armor_placeholder.png";
      this.totalThorns = 0;
      this.totalHp -= this.chosenArmor.bonusHp;
      this.increaseItemCount(this.chosenArmor).subscribe();
      this.armorTitle = "RESILIENCE: 0\nTHORNS: 0";

      await new Promise(f => setTimeout(f, 200));
      let weaponContainer = <HTMLDivElement>document.getElementById("weapon_container");
      let armorContainer = <HTMLDivElement>document.getElementById("armor_container");
      this.removeChildrenFromContainer(weaponContainer);
      this.removeChildrenFromContainer(armorContainer);
      this.loadAllItems();
      this.reloadContainers();

      this.chosenArmor = {} as Item;
      this.currentGameEntity.armor = {} as Item;
      localStorage.setItem("game_entity", JSON.stringify(this.currentGameEntity));
    }
  }

  async chooseArmor(armor: Item) {
    if(Object.keys(this.chosenChampion).length != 0) {
      this.armor_image = "assets/sprites/items/" + armor.picture;
      if(Object.keys(this.chosenArmor).length != 0) {
        this.increaseItemCount(this.chosenArmor).subscribe();
      }
      this.chosenArmor = armor;
      this.currentGameEntity.armor = armor;
      this.addArmorStats(armor);
      this.decreaseItemCount(armor).subscribe();
      await new Promise(f => setTimeout(f, 200));
      let weaponContainer = <HTMLDivElement>document.getElementById("weapon_container");
      let armorContainer = <HTMLDivElement>document.getElementById("armor_container");
      this.removeChildrenFromContainer(weaponContainer);
      this.removeChildrenFromContainer(armorContainer);
      this.loadAllItems();
      this.reloadContainers();
      localStorage.setItem("game_entity", JSON.stringify(this.currentGameEntity));
    }
  }

  removeChildrenFromContainer(container: HTMLDivElement) {
    while(container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }

  reloadContainers() {
    this.weaponTrigger = false;
    this.armorTrigger = false;
    setTimeout(() => {
      this.weaponTrigger = true;
      this.armorTrigger = true;
    })
  }

  resetAllStats() {
    this.baseHp = 0;
    this.baseDamage = 0;
    this.baseMana = 0;
    this.totalHp = 0;
    this.totalDamage = 0;
    this.totalMana = 0;
    this.totalLifesteal = 0;
    this.totalThorns = 0;
  }

  setBaseStats(champion: Champion) {
    this.baseHp = champion.hp;
    this.baseDamage = champion.baseDamage;
    this.baseMana = champion.mana;
    this.totalHp = champion.hp;
    this.totalDamage = champion.baseDamage;
    this.totalMana = champion.mana;
    this.totalLifesteal = 0;
    this.totalThorns = 0;
    this.championTitle = "HP: " + this.baseHp + "\nDAMAGE: " + this.baseDamage + "\nMANA: " + this.baseMana;
    this.armorTitle = "RESILIENCE: 0\nTHORNS: 0";
    this.weaponTitle = "LIFESTEAL: 0\nDAMAGE: 0";
  }

  addWeaponStats(weapon: Item) {
    this.totalDamage = this.chosenChampion.baseDamage;
    this.totalDamage += weapon.bonusDamage;
    this.totalLifesteal = weapon.bonusHp;
    this.weaponTitle = "LIFESTEAL: " + this.totalLifesteal + "\nDAMAGE: " + weapon.bonusDamage;
  }

  addArmorStats(armor: Item) {
    this.totalThorns = armor.bonusDamage;
    this.totalHp = this.chosenChampion.hp;
    this.totalHp += armor.bonusHp;
    this.armorTitle = "RESILIENCE: " + armor.bonusHp + "\nTHORNS: " + this.totalThorns;
  }

  increaseItemCount(item: Item): Observable<any> {
    let linkToUpdate = {} as ItemOwnership;
    for(let link of this.itemLinks) {
      if(link.item.name == item.name) {
        linkToUpdate = link;
      }
    }
    return this.itemLinkService.increaseCount(linkToUpdate.id);
  }

  decreaseItemCount(item: Item): Observable<any> {
    let linkToUpdate = {} as ItemOwnership;
    for(let link of this.itemLinks) {
      if(link.item.name == item.name) {
        linkToUpdate = link;
      }
    }
    return this.itemLinkService.decreaseCount(linkToUpdate.id);
  }

}
