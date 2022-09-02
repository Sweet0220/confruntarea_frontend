import { Component, OnInit } from '@angular/core';
import {Monster} from "../../entity/monster";
import {MonsterService} from "../../service/monster.service";
import {User} from "../../entity/user";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-almanac',
  templateUrl: './almanac.component.html',
  styleUrls: ['./almanac.component.css']
})
export class AlmanacComponent implements OnInit {

  monsters: Array<Monster> = [];
  selectedMonster: Monster = {} as Monster;
  description: string = "";
  lore: string = "";

  constructor(private monsterService: MonsterService, private http: HttpClient) { }

  ngOnInit(): void {
    this.monsterService.getAllMonsters().subscribe(data => {
      this.monsters = data;
      for (let i = 0; i < this.monsters.length - 1; i++) {
        for(let j = i+1; j < this.monsters.length; j++) {
          if(this.monsters[i].level > this.monsters[j].level) {
            let aux = this.monsters[i];
            this.monsters[i] = this.monsters[j];
            this.monsters[j] = aux;
          }
        }
      }
    });
  }

  getLevelClass(monster: Monster): string {
    let principal: User = JSON.parse(<any>localStorage.getItem("principal"));
    if(monster.level <= principal.level) {
      return "monster_low_level";
    }
    if(monster.level > principal.level && monster.level-principal.level <= 2) {
      return "monster_mid_level";
    }
    return "monster_high_level";
  }

  exists(): boolean {
    if(Object.keys(this.selectedMonster).length != 0)
      return true;
    return false;
  }

  selectMonster(monster: Monster) {
    this.selectedMonster = monster;
    let descFile: string = monster.picture.slice(0,-4);
    let loreFile: string = descFile + ".txt";
    descFile += "_desc.txt";
    this.http.get("assets/lore/monsters/" + descFile, {responseType: "text"}).subscribe(data => this.description = data);
    this.http.get("assets/lore/monsters/" + loreFile, {responseType: "text"}).subscribe(data => this.lore = data);
  }

}
