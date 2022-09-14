import { Component, OnInit } from '@angular/core';
import {GameService} from "../../../service/game.service";
import {AudioService} from "../../../service/audio.service";
import {InterfaceService} from "../../../game-logic/interface.service";
import {Monster} from "../../../entity/monster";
import {GameEntity} from "../../../game-logic/game-entity";

@Component({
  selector: 'app-monster-turn-interface',
  templateUrl: './monster-turn-interface.component.html',
  styleUrls: ['./monster-turn-interface.component.css']
})
export class MonsterTurnInterfaceComponent implements OnInit {

  damageGiven: string = "";
  currentMonster: Monster = JSON.parse(<any>localStorage.getItem("currentMonster"));
  gameEntity: GameEntity = JSON.parse(<any>localStorage.getItem("game_entity"));
  sfx: string = "";

  constructor(private gameService: GameService, private audioService: AudioService, private interfaceService: InterfaceService) { }

  async ngOnInit() {

    await this.triggerHit();
  }

  async triggerHit() {
    this.gameService.monsterHit = true;
    await new Promise(f => setTimeout(f, 400));
    this.sfx = "assets/audio/hit.wav";
    await new Promise(f => setTimeout(f, 400));
    this.gameService.monsterHit = false;

    let percentage = this.randomNumberInInterval(1, 25);
    let damageGiven = Math.floor(this.currentMonster.baseDamage - this.currentMonster.baseDamage * percentage / 100);

    this.damageGiven = damageGiven + " damage!";


    if(this.interfaceService.currentHp - damageGiven >= 0) {
      this.interfaceService.currentHp -= damageGiven;
    } else {
      this.interfaceService.currentHp = 0;
    }

    if(this.interfaceService.currentHpMonster - this.gameEntity.totalThorns >= 0) {
      this.interfaceService.currentHpMonster -= this.gameEntity.totalThorns;
    } else {
      this.interfaceService.currentHpMonster = 0;
    }


    await new Promise(f => setTimeout(f, 150));
    for(let i=1; i<=5; i++) {
      this.gameService.playerHitEffect = false;
      await new Promise(f => setTimeout(f, 150));
      this.gameService.playerHitEffect = true;
      await new Promise(f => setTimeout(f, 150));
    }
    if(this.interfaceService.currentHp <= 0) {
      this.gameService.playerHitEffect = false;
      let chance = this.randomNumberInInterval(0, 100);
      if (chance <= 20) {
        await this.easterEgg();
      }
    }
    this.gameService.hasAttacked = false;
    this.gameService.hasUsedItem = false;
    this.gameService.hasUsedAbility = false;
    this.interfaceService.currentMana += 25;
    this.interfaceService.monsterTurnInterface = false;
    this.interfaceService.mainInterface = true;
  }

  async easterEgg() {
    this.interfaceService.monsterPicture = "assets/animations/easter-egg.gif";
    this.interfaceService.monsterHeight = "100";
    this.audioService.song = "assets/audio/easter-egg.mp3";
    await new Promise(f => setTimeout(f, 5000));
  }

  get audio() {
    return this.audioService.audio;
  }

  private randomNumberInInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}
