import { Component, OnInit } from '@angular/core';
import {Monster} from "../../../entity/monster";
import {User} from "../../../entity/user";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-win-interface',
  templateUrl: './win-interface.component.html',
  styleUrls: ['./win-interface.component.css']
})
export class WinInterfaceComponent implements OnInit {

  currentMonster: Monster = JSON.parse(<any>localStorage.getItem("currentMonster"));
  principal: User = JSON.parse(<any>localStorage.getItem("principal"));

  orbs: boolean = false;
  exp: boolean = false;
  back: boolean = false;

  constructor(private userService: UserService) { }

  async ngOnInit() {
    this.addRewards();
    await new Promise(f => setTimeout(f, 1200));
    this.orbs = true;
    await new Promise(f => setTimeout(f, 600));
    this.exp = true;
    await new Promise(f => setTimeout(f, 1200));
    this.back = true;
  }

  addRewards() {
    if(this.principal.exp + this.currentMonster.expReward >= 1000) {
      this.principal.level ++;
      this.principal.exp = this.principal.exp + this.currentMonster.expReward - 1000;
    } else {
      this.principal.exp += this.currentMonster.expReward;
    }

    this.principal.funds += this.currentMonster.moneyReward;

    this.userService.updateUser(this.principal).subscribe();
    localStorage.setItem("principal", JSON.stringify(this.principal));
  }

  refresh() {
    localStorage.setItem("game_entity", "");
    window.location.reload();
  }

}
