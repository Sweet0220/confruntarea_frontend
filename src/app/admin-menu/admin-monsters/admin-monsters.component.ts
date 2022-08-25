import { Component, OnInit } from '@angular/core';
import {AdminMonsterService} from "../../../service/admin-monster.service";

@Component({
  selector: 'app-admin-monsters',
  templateUrl: './admin-monsters.component.html',
  styleUrls: ['./admin-monsters.component.css']
})
export class AdminMonstersComponent implements OnInit {

  constructor(private adminMonsterService: AdminMonsterService) { }

  ngOnInit(): void {
  }

  get getMainMenuToggle() {
    return this.adminMonsterService.monsterMenuToggle;
  }

  get getAddMenuToggle() {
    return this.adminMonsterService.monsterAddToggle;
  }

  get getViewMenuToggle() {
    return this.adminMonsterService.monsterViewToggle;
  }

  toggleAddMenu() {
    this.adminMonsterService.toggleMonsterAdd();
  }

}
