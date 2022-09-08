import { Component, HostListener, OnInit } from '@angular/core';
import {isCI} from "@angular/cli/src/utilities/environment-options";
import {AudioService} from "../../../service/audio.service";
import {GameService} from "../../../service/game.service";
import {InterfaceService} from "../../../game-logic/interface.service";

@Component({
  selector: 'app-attack-interface',
  templateUrl: './attack-interface.component.html',
  styleUrls: ['./attack-interface.component.css']
})
export class AttackInterfaceComponent implements OnInit {

  constructor(private audioService: AudioService, private gameService: GameService, private interfaceService: InterfaceService) { }

  gameEntity = JSON.parse(<any>localStorage.getItem("game_entity"));
  sfx: string = "";
  damageDealt = " ";

  ngOnInit(): void {
  }

  @HostListener('document:keydown', ['$event'])
  async attack(event: KeyboardEvent) {
    if(event.key == " ") {
      let damageGiven: number = 0;
      let attackBar = <HTMLDivElement>document.getElementById("attack_slider");
      attackBar.style.animationPlayState= "paused";
      this.sfx = "assets/audio/spacebar.wav";
      await new Promise(f => setTimeout(f, 400));

      let badLeft = document.getElementById("bad_left");
      let midLeft = document.getElementById("mid_left");
      let good = document.getElementById("good");
      let midRight = document.getElementById("mid_right");
      let badRight = document.getElementById("bad_right");

      if(this.isColliding(attackBar, badLeft) || this.isColliding(attackBar, badRight)) {
        damageGiven = this.generateBadNumber();
        console.log(damageGiven);
      }

      if(this.isColliding(attackBar, midLeft) || this.isColliding(attackBar, midRight)) {
        damageGiven = this.generateMidNumber();
        if(this.interfaceService.currentHp < this.gameEntity.totalHp) {
          if(this.interfaceService.currentHp + Math.floor(this.gameEntity.totalLifesteal/2) <= this.gameEntity.totalHp) {
            this.interfaceService.currentHp += Math.floor(this.gameEntity.totalLifesteal/2)
          } else {
            this.interfaceService.currentHp = this.gameEntity.totalHp;
          }
        }
        console.log(damageGiven);
      }

      if(this.isColliding(attackBar, good)) {
        damageGiven = this.gameEntity.totalDamage;
        if(this.interfaceService.currentHp < this.gameEntity.totalHp) {
          if(this.interfaceService.currentHp + this.gameEntity.totalLifesteal <= this.gameEntity.totalHp) {
            this.interfaceService.currentHp += this.gameEntity.totalLifesteal;
          } else {
            this.interfaceService.currentHp = this.gameEntity.totalHp;
          }
        }
        console.log(damageGiven);
      }
      await this.triggerHit(damageGiven);
    }
  }

  isColliding(slider: any, div: any): boolean {
    let sliderPos = slider.getBoundingClientRect();
    let divPos = div.getBoundingClientRect();
    if(sliderPos.left >= divPos.left && sliderPos.left <= divPos.left + divPos.width) {
      return true;
    }
    return false;
  }



  get audio() {
    return this.audioService.audio;
  }

  async triggerHit(damageGiven: any) {
    this.gameService.hit = true;
    this.gameService.hasAttacked = true;
    this.sfx = "assets/audio/hit.wav";
    await new Promise(f => setTimeout(f, 650));
    this.gameService.hit = false;

    this.damageDealt = damageGiven + " damage!";

    if(this.interfaceService.currentHpMonster - damageGiven >= 0) {
      this.interfaceService.currentHpMonster -= damageGiven;
    } else {
      this.interfaceService.currentHpMonster = 0;
    }


    await new Promise(f => setTimeout(f, 150));
    for(let i=1; i<=5; i++) {
      this.gameService.monsterHitEffect = false;
      await new Promise(f => setTimeout(f, 150));
      this.gameService.monsterHitEffect = true;
      await new Promise(f => setTimeout(f, 150));
    }
    if(this.interfaceService.currentHpMonster <= 0) {
      this.gameService.monsterHitEffect = false;
    }
    await new Promise(f => setTimeout(f, 550));
    this.interfaceService.attackInterface = false;
    this.interfaceService.mainInterface = true;
  }

  generateBadNumber(): number {
    let randomPercentage = this.randomNumberInInterval(50,70);
    let championDamage = this.gameEntity.totalDamage;
    championDamage = Math.floor(championDamage - (championDamage * randomPercentage / 100));
    return championDamage;
  }

  generateMidNumber(): number {
    let randomPercentage = this.randomNumberInInterval(20,35);
    let championDamage = this.gameEntity.totalDamage;
    championDamage = Math.floor(championDamage - (championDamage * randomPercentage / 100));
    return championDamage;
  }

  private randomNumberInInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
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

}
