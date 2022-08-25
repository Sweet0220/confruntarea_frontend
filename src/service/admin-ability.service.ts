import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAbilityService {

  abilityMenuToggle: boolean = true;
  abilityViewToggle: boolean = false;
  abilityAddToggle: boolean = false;
  name: string = "";

  constructor() { }

  toggleAbilityMenu() {
    this.abilityMenuToggle = true;
    this.abilityViewToggle = false;
    this.abilityAddToggle = false;
  }

  toggleAbilityAdd() {
    this.abilityMenuToggle = false;
    this.abilityViewToggle = false;
    this.abilityAddToggle = true;
  }

  toggleAbilityView(name: string) {
    this.abilityMenuToggle = false;
    this.abilityViewToggle = true;
    this.abilityAddToggle = false;
    this.name = name;
  }
}
