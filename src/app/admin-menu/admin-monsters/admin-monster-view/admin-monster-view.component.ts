import { Component, OnInit } from '@angular/core';
import {AdminMonsterService} from "../../../../service/admin-monster.service";
import {MonsterService} from "../../../../service/monster.service";
import {Monster} from "../../../../entity/monster";

@Component({
  selector: 'app-admin-monster-view',
  templateUrl: './admin-monster-view.component.html',
  styleUrls: ['./admin-monster-view.component.css']
})
export class AdminMonsterViewComponent implements OnInit {

  monster: Monster = {} as Monster;

  constructor(private adminMonsterService: AdminMonsterService, private monsterService: MonsterService) { }

  ngOnInit(): void {
    const name = this.adminMonsterService.name;
    this.monsterService.getMonsterByName(name).subscribe(monster => {
      this.monster = monster;
    });
  }

  toggleMainMenu() {
    this.adminMonsterService.toggleMonsterMenu();
  }

  deleteMonster() {
    this.monsterService.deleteMonster(this.monster.name).subscribe({error: _ => {
      this.adminMonsterService.toggleMonsterMenu();
      }});
  }

  updateMonster() {
    const hpInput = <HTMLInputElement>document.getElementById("hp_input");
    const hp: number = hpInput.valueAsNumber;

    const damageInput = <HTMLInputElement>document.getElementById("damage_input");
    const damage: number = damageInput.valueAsNumber;

    const levelInput = <HTMLInputElement>document.getElementById("level_input");
    const level: number = levelInput.valueAsNumber;

    const moneyRewardInput = <HTMLInputElement>document.getElementById("moneyReward_input");
    const moneyReward: number = moneyRewardInput.valueAsNumber;

    const expRewardInput = <HTMLInputElement>document.getElementById("expReward_input");
    const expReward: number = expRewardInput.valueAsNumber;

    const pictureInput = <HTMLInputElement>document.getElementById("picture_input");
    const picture: string = pictureInput.value;

    const nameColorInput = <HTMLInputElement>document.getElementById("nameColor_input");
    const nameColor: string = nameColorInput.value;

    if(hp != null && damage != null && level != null && moneyReward != null && expReward != null && picture != "" && nameColor != "") {
      this.monster.hp = hp;
      this.monster.baseDamage = damage;
      this.monster.level = level;
      this.monster.moneyReward = moneyReward;
      this.monster.expReward = expReward;
      this.monster.picture = picture;
      this.monster.nameColor = nameColor;

      this.monsterService.updateMonster(this.monster).subscribe({error: _ => {
        this.adminMonsterService.toggleMonsterMenu();
        }});
    }
  }

}
