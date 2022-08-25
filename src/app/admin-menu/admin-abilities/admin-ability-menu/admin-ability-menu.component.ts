import { Component, OnInit } from '@angular/core';
import {Ability} from "../../../../entity/ability";
import {AbilityService} from "../../../../service/ability.service";
import {AdminAbilityService} from "../../../../service/admin-ability.service";

@Component({
  selector: 'app-admin-ability-menu',
  templateUrl: './admin-ability-menu.component.html',
  styleUrls: ['./admin-ability-menu.component.css']
})
export class AdminAbilityMenuComponent implements OnInit {

  abilities: Array<Ability> = [];

  constructor(private abilityService: AbilityService, private adminAbilityService: AdminAbilityService) { }

  ngOnInit(): void {
    this.getAllAbilities();
  }

  getAllAbilities() {
    this.abilityService.getAllAbilities().subscribe(abilities => {
      this.abilities = abilities;
    })
  }

  toggleAbilityView(name: string) {
    this.adminAbilityService.toggleAbilityView(name);
  }

}
