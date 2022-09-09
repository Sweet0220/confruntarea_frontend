import { Component, OnInit } from '@angular/core';
import {GameService} from "../../../service/game.service";
import {AudioService} from "../../../service/audio.service";
import {InterfaceService} from "../../../game-logic/interface.service";
import {Monster} from "../../../entity/monster";

@Component({
  selector: 'app-monster-turn-interface',
  templateUrl: './monster-turn-interface.component.html',
  styleUrls: ['./monster-turn-interface.component.css']
})
export class MonsterTurnInterfaceComponent implements OnInit {

  currentMonster: Monster = JSON.parse(<any>localStorage.getItem("currentMonster"));
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
    let damageGiven = this.currentMonster.baseDamage - this.currentMonster.baseDamage * percentage / 100;


    if(this.interfaceService.currentHp - damageGiven >= 0) {
      this.interfaceService.currentHp -= damageGiven;
    } else {
      this.interfaceService.currentHp = 0;
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
    }
    await new Promise(f => setTimeout(f, 1000));
    this.gameService.hasAttacked = false;
    this.gameService.hasUsedItem = false;
    this.gameService.hasUsedAbility = false;
    this.interfaceService.monsterTurnInterface = false;
    this.interfaceService.mainInterface = true;
  }

  get audio() {
    return this.audioService.audio;
  }

  private randomNumberInInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}
