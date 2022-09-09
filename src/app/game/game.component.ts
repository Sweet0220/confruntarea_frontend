import { Component, OnInit } from '@angular/core';
import {GameEntity} from "../../game-logic/game-entity";
import {GameService} from "../../service/game.service";
import {AudioService} from "../../service/audio.service";
import {InterfaceService} from "../../game-logic/interface.service";
import {Monster} from "../../entity/monster";
import {MonsterService} from "../../service/monster.service";
import {User} from "../../entity/user";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  hasLoadout: boolean = false;
  epilepsy: boolean = false;
  game: boolean = false;
  currentMonster: Monster = {} as Monster;
  gameEntity: GameEntity = {} as GameEntity;
  currentUser: User = JSON.parse(<any>localStorage.getItem("principal"));
  monsterHeight: string = "100";

  constructor(private gameService: GameService, private audioService: AudioService, private interfaceService: InterfaceService, private monsterService: MonsterService) { }

  ngOnInit(): void {
    let jsonString = localStorage.getItem("game_entity");
    if(jsonString != "") {
      this.gameEntity = JSON.parse(<any>localStorage.getItem("game_entity"));
      if(Object.keys(this.gameEntity.champion).length != 0) {
        console.log(this.gameEntity.champion);
        this.hasLoadout = true;
    }
    }
    this.interfaceService.currentHp = this.gameEntity.totalHp;
    this.interfaceService.currentMana = this.gameEntity.totalMana;
  }

  async toggleFight() {
    this.selectRandomMonster();
    this.gameService.cover = !this.gameService.cover;
    let random = this.randomNumber(4);
    this.audioService.song = "assets/audio/fight_theme_" + random + ".mp3";
    this.epilepsy = true;
    await new Promise(f => setTimeout(f, 0));
    let epilepsy: any = document.getElementById("epilepsy");
    let epilepsyText: any = document.getElementById("epilepsy_text");
    for(let i=1; i<=14; i++) {
      await new Promise(f => setTimeout(f, 40));
      epilepsy.classList.remove("epilepsy_white");
      epilepsy.classList.add("epilepsy_black");
      epilepsyText.classList.remove("epilepsy_text_black");
      epilepsyText.classList.add("epilepsy_text_white");
      await new Promise(f => setTimeout(f, 40));
      epilepsy.classList.remove("epilepsy_black");
      epilepsy.classList.add("epilepsy_white");
      epilepsyText.classList.remove("epilepsy_text_white");
      epilepsyText.classList.add("epilepsy_text_black");
    }
    epilepsy.classList.remove("epilepsy_white");
    epilepsy.classList.add("epilepsy_black");
    epilepsyText.classList.remove("epilepsy_text_black");
    epilepsyText.classList.add("epilepsy_text_white");
    await new Promise(f => setTimeout(f, 1250));
    this.epilepsy = false;
    this.game = true;
  }

  async selectRandomMonster() {
    let go: boolean = true;
    this.monsterService.getAllMonsters().subscribe(data => {
      while(go) {
        let index = this.randomNumber(data.length) - 1;
        if((data[index].level <= this.currentUser.level) || (data[index].level > this.currentUser.level && data[index].level - this.currentUser.level <= 2)) {
          this.currentMonster = data[index];
          localStorage.setItem("currentMonster", JSON.stringify(this.currentMonster));
          this.interfaceService.currentHpMonster = data[index].hp;
          if(this.currentMonster.name == "Musca Tzetze") {
            this.monsterHeight = "45";
          }
          go = false;
        }
      }
    });

  }

  private randomNumber(number: number): number {
    return Math.floor(Math.random() * number) + 1;
  }

  get mainInterface() {
    return this.interfaceService.mainInterface;
  }

  get attackInterface() {
    return this.interfaceService.attackInterface;
  }

  get abilityInterface() {
    return this.interfaceService.abilityInterface;
  }

  get monsterTurnInterface() {
    return this.interfaceService.monsterTurnInterface;
  }

  get currentHp() {
    return this.interfaceService.currentHp;
  }

  get currentMana() {
    return this.interfaceService.currentMana;
  }

  get currentHpMonster() {
    return this.interfaceService.currentHpMonster;
  }

  get hit() {
    return this.gameService.hit;
  }

  get monsterHit() {
    return this.gameService.monsterHit;
  }

  get monsterHitEffect() {
    return this.gameService.monsterHitEffect;
  }

  get playerHitEffect() {
    return this.gameService.playerHitEffect;
  }

  get ability() {
    return this.interfaceService.ability;
  }

  get win() {
    return this.interfaceService.win;
  }

  get lose() {
    return this.interfaceService.lose;
  }

}
