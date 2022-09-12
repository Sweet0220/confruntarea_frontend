import { Component, OnInit } from '@angular/core';
import {InterfaceService} from "../../../game-logic/interface.service";
import {Item} from "../../../entity/item";
import {AudioService} from "../../../service/audio.service";
import {GameService} from "../../../service/game.service";
import {Monster} from "../../../entity/monster";
import {GameEntity} from "../../../game-logic/game-entity";
import {ItemOwnershipService} from "../../../service/item-ownership.service";
import {User} from "../../../entity/user";

@Component({
  selector: 'app-item-use-interface',
  templateUrl: './item-use-interface.component.html',
  styleUrls: ['./item-use-interface.component.css']
})
export class ItemUseInterfaceComponent implements OnInit {

  showInterface: boolean = true;
  sfx = "";
  item: Item = this.interfaceService.chosenItem;
  currentMonster: Monster = JSON.parse(<any>localStorage.getItem("currentMonster"));
  gameEntity: GameEntity = JSON.parse(<any>localStorage.getItem("game_entity"));
  principal: User = JSON.parse(<any>localStorage.getItem("principal"));

  constructor(private interfaceService: InterfaceService, private audioService: AudioService, private gameService: GameService, private itemLinkService: ItemOwnershipService) { }

  ngOnInit(): void {
  }

  goBack() {
    this.interfaceService.mainInterface = true;
    this.interfaceService.itemUseInterface = false;
  }


  async throwItem() {
    this.showInterface = false;
    this.gameService.hasUsedItem = true;
    this.interfaceService.item = this.item;
    this.interfaceService.throw = true;
    this.sfx = "assets/audio/throw.wav";
    this.itemLinkService.getByUsername(this.principal.username).subscribe(data => {
      for(let link of data) {
        if(link.item.name == this.item.name) {
          this.itemLinkService.decreaseCount(link.id).subscribe();
        }
      }
    });
    await new Promise(f => setTimeout(f, 300));

    this.sfx = "assets/audio/hit.wav";

    if(this.interfaceService.currentHpMonster - this.item.bonusDamage >= 0) {
      this.interfaceService.currentHpMonster -= this.item.bonusDamage;
    } else {
      this.interfaceService.currentHpMonster = 0;
    }

    if(this.interfaceService.currentHp + this.item.bonusHp <= this.gameEntity.totalHp) {
      this.interfaceService.currentHp += this.item.bonusHp;
    } else {
      this.interfaceService.currentHp = this.gameEntity.totalHp;
    }

    await new Promise(f => setTimeout(f, 400));

    this.interfaceService.throw = false;

    for(let i=1; i<=5; i++) {
      this.gameService.monsterHitEffect = false;
      await new Promise(f => setTimeout(f, 150));
      this.gameService.monsterHitEffect = true;
      await new Promise(f => setTimeout(f, 150));
    }
    if(this.interfaceService.currentHpMonster <= 0) {
      this.gameService.monsterHitEffect = false;
    }

    await new Promise(f => setTimeout(f, 1000));
    this.interfaceService.mainInterface = true;
    this.interfaceService.itemUseInterface = false;
  }

  async useItem() {

    if(this.item.type == "THROWABLE") {
      await this.throwItem();
    }

    if(this.item.type == "POTION") {

    }

  }

  get audio() {
    return this.audioService.audio;
  }

  get throw() {
    return this.interfaceService.throw;
  }

  get drink() {
    return this.interfaceService.drink
  }

}
