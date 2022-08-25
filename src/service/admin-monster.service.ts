import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminMonsterService {

  monsterMenuToggle: boolean = true;
  monsterViewToggle: boolean = false;
  monsterAddToggle: boolean = false;
  name: string = "";

  constructor() { }

  toggleMonsterMenu() {
    this.monsterMenuToggle = true;
    this.monsterViewToggle = false;
    this.monsterAddToggle = false;
  }

  toggleMonsterAdd() {
    this.monsterMenuToggle = false;
    this.monsterViewToggle = false;
    this.monsterAddToggle = true;
  }

  toggleMonsterView(name: string) {
    this.monsterMenuToggle = false;
    this.monsterViewToggle = true;
    this.monsterAddToggle = false;
    this.name = name;
  }
}
