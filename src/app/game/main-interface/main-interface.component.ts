import { Component, OnInit } from '@angular/core';
import {InterfaceService} from "../../../game-logic/interface.service";
import {GameEntity} from "../../../game-logic/game-entity";
import {ItemOwnership} from "../../../entity/item-ownership";
import {Item} from "../../../entity/item";
import {ItemOwnershipService} from "../../../service/item-ownership.service";
import {GameService} from "../../../service/game.service";
import {AudioService} from "../../../service/audio.service";

@Component({
  selector: 'app-main-interface',
  templateUrl: './main-interface.component.html',
  styleUrls: ['./main-interface.component.css']
})
export class MainInterfaceComponent implements OnInit {

  gameEntity: GameEntity = {} as GameEntity;
  currentUser = JSON.parse(<any>localStorage.getItem("principal"));
  itemLinks: Array<ItemOwnership> = [];
  throwables: Array<Item> = [];
  potions: Array<Item> = [];

  constructor(private interfaceService: InterfaceService, private itemLinkService: ItemOwnershipService, private gameService: GameService, private audioService: AudioService) { }

  ngOnInit(): void {
    this.gameEntity = JSON.parse(<any>localStorage.getItem("game_entity"));
    this.loadAllItems();
    if(this.hasWon()) {
      this.audioService.song = "assets/audio/win_theme.mp3";
      this.interfaceService.win = true;
    }
    if(this.hasLost()) {
      this.audioService.song = "assets/audio/lose_theme.mp3";
      this.interfaceService.lose = true;
    }
  }

  get currentHp() {
    return this.interfaceService.currentHp;
  }

  get currentMana() {
    return this.interfaceService.currentMana;
  }

  loadAllItems() {
    this.itemLinks = [];
    this.throwables = [];
    this.potions = [];
    this.itemLinkService.getByUsername(this.currentUser.username).subscribe(data => {
      this.itemLinks = data;
      for(let link of data) {
        if(link.item.type == "POTION" && link.itemCount > 0) {
          this.potions.push(link.item);
        }
        if(link.item.type == "THROWABLE" && link.itemCount > 0) {
          this.throwables.push(link.item);
        }
      }
    });
  }

  getItemCount(throwable: any): any {
    for(let link of this.itemLinks) {
      if(throwable.name == link.item.name) {
        return link.itemCount.toString();
      }
    }
  }

  selectItem(item: Item) {
    if(!this.hasUsedItem) {
      this.interfaceService.chosenItem = item;
      this.interfaceService.itemUseInterface = true;
      this.interfaceService.mainInterface = false;
    }
  }

  toggleAttackInterface() {
    if(!this.hasAttacked) {
      this.interfaceService.attackInterface = true;
      this.interfaceService.mainInterface = false;
    }
  }

  toggleAbilityInterface() {
    if(!this.hasUsedAbility) {
      this.interfaceService.abilityInterface = true;
      this.interfaceService.mainInterface = false;
    }
  }

  toggleMonsterTurn() {
    this.interfaceService.monsterTurnInterface = true;
    this.interfaceService.mainInterface = false;
  }

  get hasAttacked() {
    return this.gameService.hasAttacked;
  }

  get hasUsedAbility() {
    return this.gameService.hasUsedAbility;
  }

  get hasUsedItem() {
    return this.gameService.hasUsedItem;
  }

  hasWon() {
    return this.interfaceService.currentHpMonster == 0;
  }

  hasLost() {
    return this.interfaceService.currentHp == 0;
  }

}
