import { Component, OnInit } from '@angular/core';
import {Monster} from "../../../entity/monster";
import {User} from "../../../entity/user";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-lose-interface',
  templateUrl: './lose-interface.component.html',
  styleUrls: ['./lose-interface.component.css']
})
export class LoseInterfaceComponent implements OnInit {

  currentMonster: Monster = JSON.parse(<any>localStorage.getItem("currentMonster"));
  principal: User = JSON.parse(<any>localStorage.getItem("principal"));

  exp: boolean = false;
  back: boolean = false;

  constructor(private userService: UserService) { }

  async ngOnInit() {
    this.subtractRewards();
    await new Promise(f => setTimeout(f, 2500));
    this.exp = true;
    await new Promise(f => setTimeout(f, 1500));
    this.back = true;
  }

  subtractRewards() {
    if(this.principal.exp - this.currentMonster.expReward/2 >= 0) {
      this.principal.exp -= this.currentMonster.expReward/2;
    }else {
      this.principal.level --;
      this.principal.exp = -(this.principal.exp - 1000 + this.currentMonster.expReward/2);
    }

    this.userService.updateUser(this.principal).subscribe();
    localStorage.setItem("principal", JSON.stringify(this.principal));
  }

  refresh() {
    localStorage.setItem("game_entity", "");
    window.location.reload();
  }

}
