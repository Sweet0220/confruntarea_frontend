import { Component, OnInit } from '@angular/core';
import {Ability} from "../../../../entity/ability";
import {AbilityService} from "../../../../service/ability.service";
import {AdminAbilityService} from "../../../../service/admin-ability.service";

@Component({
  selector: 'app-admin-ability-view',
  templateUrl: './admin-ability-view.component.html',
  styleUrls: ['./admin-ability-view.component.css']
})
export class AdminAbilityViewComponent implements OnInit {

  ability: Ability = {} as Ability;

  constructor(private abilityService: AbilityService, private adminAbilityService: AdminAbilityService) { }

  ngOnInit(): void {
    let name = this.adminAbilityService.name;
    this.abilityService.getAbilityByName(name).subscribe(ability => {
      this.ability = ability;
    });
  }

  toggleMainMenu() {
    this.adminAbilityService.toggleAbilityMenu();
  }

  deleteAbility() {
    this.abilityService.deleteAbility(this.ability.name).subscribe({error: _ => {
      this.adminAbilityService.toggleAbilityMenu();
      }});
  }

  updateAbility() {

    const healingInput = <HTMLInputElement>document.getElementById("hp_input");
    let healing: number = healingInput.valueAsNumber;

    const damageInput = <HTMLInputElement>document.getElementById("damage_input");
    let damage: number = damageInput.valueAsNumber;

    const typeInput = <HTMLInputElement>document.getElementById("type_input");
    let type: string = typeInput.value;

    const manaCostInput = <HTMLInputElement>document.getElementById("manaCost_input");
    let manaCost: number = manaCostInput.valueAsNumber;

    const pictureInput = <HTMLInputElement>document.getElementById("picture_input");
    let picture: string = pictureInput.value;


    if(healing != null && damage != null && type != "" && manaCost != null && picture != "") {
      this.ability.healing = healing;
      this.ability.damage = damage;
      this.ability.type = type;
      this.ability.manaCost = manaCost;
      this.ability.picture = picture;

      this.abilityService.updateAbility(this.ability.name, this.ability).subscribe({error: _ => {
          this.adminAbilityService.toggleAbilityMenu();
        }});
    }

  }

}
