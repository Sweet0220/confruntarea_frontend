import { Component, OnInit } from '@angular/core';
import {Monster} from "../../../../entity/monster";
import {MonsterService} from "../../../../service/monster.service";
import {AdminMonsterService} from "../../../../service/admin-monster.service";

@Component({
  selector: 'app-admin-monster-menu',
  templateUrl: './admin-monster-menu.component.html',
  styleUrls: ['./admin-monster-menu.component.css']
})
export class AdminMonsterMenuComponent implements OnInit {

  monsters: Array<Monster> = [];

  constructor(private monsterService: MonsterService, private adminMonsterService: AdminMonsterService) { }

  ngOnInit(): void {
    this.getAllMonsters();
  }

  getAllMonsters() {
    this.monsterService.getAllMonsters().subscribe(monsters => {
      this.monsters = monsters;
    });
  }

  toggleViewMenu(name: string) {
    this.adminMonsterService.toggleMonsterView(name);
  }

}
