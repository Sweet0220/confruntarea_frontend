import { Component, OnInit } from '@angular/core';
import {AdminMonsterService} from "../../../../service/admin-monster.service";
import {MonsterService} from "../../../../service/monster.service";
import {Monster} from "../../../../entity/monster";

@Component({
  selector: 'app-admin-monster-add',
  templateUrl: './admin-monster-add.component.html',
  styleUrls: ['./admin-monster-add.component.css']
})
export class AdminMonsterAddComponent implements OnInit {

  constructor(private adminMonsterService: AdminMonsterService, private monsterService: MonsterService) { }

  ngOnInit(): void {
  }

  toggleMainMenu() {
    this.adminMonsterService.toggleMonsterMenu();
  }

  addNewMonster() {

    const nameInput = <HTMLInputElement>document.getElementById("name_input");
    const name: string = nameInput.value;

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

    if(name != "" && hp != null && damage != null && level != null && moneyReward != null && expReward != null && picture != "" && nameColor != "") {
      const monster: Monster = new Monster(name, level, hp, damage, moneyReward, expReward, picture, nameColor);
      this.monsterService.addNewMonster(monster).subscribe({error: _ => {
          this.adminMonsterService.toggleMonsterMenu();
        }});
    }
  }

}
