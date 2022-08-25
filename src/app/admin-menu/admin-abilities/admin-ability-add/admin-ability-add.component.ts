import { Component, OnInit } from '@angular/core';
import {AdminAbilityService} from "../../../../service/admin-ability.service";
import {AbilityService} from "../../../../service/ability.service";
import {ChampionService} from "../../../../service/champion.service";
import {Champion} from "../../../../entity/champion";
import {Ability} from "../../../../entity/ability";

@Component({
  selector: 'app-admin-ability-add',
  templateUrl: './admin-ability-add.component.html',
  styleUrls: ['./admin-ability-add.component.css']
})
export class AdminAbilityAddComponent implements OnInit {

  constructor(private adminAbilityService: AdminAbilityService, private abilityService: AbilityService, private championService: ChampionService) { }

  ngOnInit(): void {
  }

  toggleMainMenu() {
    this.adminAbilityService.toggleAbilityMenu();
  }

  addNewAbility() {

    const nameInput = <HTMLInputElement>document.getElementById("name_input");
    const name: string = nameInput.value;

    const healingInput = <HTMLInputElement>document.getElementById("hp_input");
    const healing: number = healingInput.valueAsNumber;

    const damageInput = <HTMLInputElement>document.getElementById("damage_input");
    const damage: number = damageInput.valueAsNumber;

    const typeInput = <HTMLInputElement>document.getElementById("type_input");
    const type: string = typeInput.value;

    const manaCostInput = <HTMLInputElement>document.getElementById("mana_input");
    const mana: number = manaCostInput.valueAsNumber;

    const pictureInput = <HTMLInputElement>document.getElementById("picture_input");
    const picture: string = pictureInput.value;

    const championNameInput = <HTMLInputElement>document.getElementById("champion_input")
    const championName = championNameInput.value;

    let champion: Champion = {} as Champion;

    if(name != "") {
      this.championService.getChampionByName(championName).subscribe(champ => {
        if(champ != null) {
          champion = champ;
        }
        if(name != "" && healing != null && damage != null && type != "" && mana != null && picture != null && champion != {} as Champion) {
          let ability: Ability = new Ability(name,type,healing,damage,picture,mana);
          this.abilityService.addNewAbility(ability,champion.name).subscribe({error: _ => {
              this.adminAbilityService.toggleAbilityMenu();
            }});
        }
      });
    }


  }

}
