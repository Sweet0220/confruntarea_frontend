import { Component, OnInit } from '@angular/core';
import {Ability} from "../../../entity/ability";
import {AbilityService} from "../../../service/ability.service";
import {InterfaceService} from "../../../game-logic/interface.service";
import {AudioService} from "../../../service/audio.service";
import {GameService} from "../../../service/game.service";

@Component({
  selector: 'app-ability-interface',
  templateUrl: './ability-interface.component.html',
  styleUrls: ['./ability-interface.component.css']
})
export class AbilityInterfaceComponent implements OnInit {

  gameEntity = JSON.parse(<any>localStorage.getItem("game_entity"));
  abilities: Array<Ability> = [];
  sfx: string = "";
  usedAbility: boolean = false;

  constructor(private abilityService: AbilityService, private interfaceService: InterfaceService, private audioService: AudioService, private gameService: GameService) { }

  ngOnInit(): void {
    this.loadAbilities();
  }

  loadAbilities() {
    this.abilityService.getAbilitiesByChampionName(this.gameEntity.champion.name).subscribe(data => this.abilities = data);
  }

  async useAbility(ability: Ability) {
    this.interfaceService.currentMana -= ability.manaCost;
    this.usedAbility = true;
    await new Promise(f => setTimeout(f, 1400));
    let gifFile = ability.picture.slice(0, -4) + ".gif";
    let audioFile = ability.picture.slice(0, -4) + ".mp3";
    this.interfaceService.ability = "assets/animations/" + gifFile;
    await new Promise(f => setTimeout(f, 500));
    this.sfx = "assets/audio/" + audioFile;
    this.interfaceService.ability = "";

    if(this.interfaceService.currentHpMonster - ability.damage >= 0) {
      this.interfaceService.currentHpMonster -= ability.damage;
    } else {
      this.interfaceService.currentHpMonster = 0;
    }

    if(this.interfaceService.currentHp < this.gameEntity.totalHp) {
      if(this.interfaceService.currentHp + ability.healing <= this.gameEntity.totalHp) {
        this.interfaceService.currentHp += ability.healing;
      } else {
        this.interfaceService.currentHp = this.gameEntity.totalHp;
      }
    }

    await new Promise(f => setTimeout(f, 200));
    for(let i=1; i<=6; i++) {
      this.gameService.monsterHitEffect = false;
      await new Promise(f => setTimeout(f, 150));
      this.gameService.monsterHitEffect = true;
      await new Promise(f => setTimeout(f, 150));
    }
    this.sfx = "";
    if(this.interfaceService.currentHpMonster <= 0) {
      this.gameService.monsterHitEffect = false;
    }
    await new Promise(f => setTimeout(f, 1000));
    this.gameService.hasUsedAbility = true;
    this.interfaceService.abilityInterface = false;
    this.interfaceService.mainInterface = true;
  }

  get audio() {
    return this.audioService.audio;
  }

  get mana() {
    return this.interfaceService.currentMana;
  }

  goBack() {
    this.interfaceService.abilityInterface = false;
    this.interfaceService.mainInterface = true;
  }

}
