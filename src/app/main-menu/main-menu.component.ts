import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  profileToggle: boolean = true;
  shopToggle: boolean = false;
  almanacToggle: boolean = false;
  helpToggle: boolean = false;
  aboutToggle: boolean = false;
  prepToggle: boolean = false;
  toBattleToggle: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleProfileComponent(): void {
    this.profileToggle = true;
    this.shopToggle = false;
    this.almanacToggle = false;
    this.helpToggle = false;
    this.aboutToggle = false;
    this.prepToggle = false;
    this.toBattleToggle = false;
  }

  toggleShopComponent(): void {
    this.profileToggle = false;
    this.shopToggle = true;
    this.almanacToggle = false;
    this.helpToggle = false;
    this.aboutToggle = false;
    this.prepToggle = false;
    this.toBattleToggle = false;
  }

  toggleAlmanacComponent(): void {
    this.profileToggle = false;
    this.shopToggle = false;
    this.almanacToggle = true;
    this.helpToggle = false;
    this.aboutToggle = false;
    this.prepToggle = false;
    this.toBattleToggle = false;
  }

  toggleHelpComponent(): void {
    this.profileToggle = false;
    this.shopToggle = false;
    this.almanacToggle = false;
    this.helpToggle = true;
    this.aboutToggle = false;
    this.prepToggle = false;
    this.toBattleToggle = false;
  }

  toggleAboutComponent(): void {
    this.profileToggle = false;
    this.shopToggle = false;
    this.almanacToggle = false;
    this.helpToggle = false;
    this.aboutToggle = true;
    this.prepToggle = false;
    this.toBattleToggle = false;
  }

  togglePrepComponent(): void {
    this.profileToggle = false;
    this.shopToggle = false;
    this.almanacToggle = false;
    this.helpToggle = false;
    this.aboutToggle = false;
    this.prepToggle = true;
    this.toBattleToggle = false;
  }

  toggleToBattleComponent(): void {
    this.profileToggle = false;
    this.shopToggle = false;
    this.almanacToggle = false;
    this.helpToggle = false;
    this.aboutToggle = false;
    this.prepToggle = false;
    this.toBattleToggle = true;
  }

}
