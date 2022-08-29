import { Component, OnInit } from '@angular/core';
import {User} from "../../entity/user";
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {GameEntity} from "../../game-logic/game-entity";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user : User = {} as User;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    let savedUser = JSON.parse(<any>localStorage.getItem("principal"));
    this.userService.getUserByUsername(savedUser.username).subscribe(user => {
      this.user = user;
      localStorage.setItem("principal", JSON.stringify(user));
    })
    let gameEntity = JSON.parse(<any>localStorage.getItem("game_entity"));
    console.log(gameEntity);
  }

  logout() {
    localStorage.setItem("access_token", "");
    localStorage.setItem("refresh_token", "");
    localStorage.setItem("principal", "");
    this.router.navigate(["/login"]);
  }

}
