import { Component, OnInit } from '@angular/core';
import {AdminAbilityService} from "../../../service/admin-ability.service";

@Component({
  selector: 'app-admin-abilities',
  templateUrl: './admin-abilities.component.html',
  styleUrls: ['./admin-abilities.component.css']
})
export class AdminAbilitiesComponent implements OnInit {

  constructor(private adminAbilityService: AdminAbilityService) { }

  ngOnInit(): void {
  }

  toggleAddMenu() {
    this.adminAbilityService.toggleAbilityAdd();
  }

  get getMenuToggle() {
    return this.adminAbilityService.abilityMenuToggle;
  }

  get getAddToggle() {
    return this.adminAbilityService.abilityAddToggle;
  }

  get getViewToggle() {
    return this.adminAbilityService.abilityViewToggle;
  }

}
