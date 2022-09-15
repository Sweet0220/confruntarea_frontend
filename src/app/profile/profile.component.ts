import { Component, OnInit } from '@angular/core';
import {User} from "../../entity/user";
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {GameEntity} from "../../game-logic/game-entity";
import {ChampionOwnershipService} from "../../service/champion-ownership.service";
import {Champion} from "../../entity/champion";
import {ChampionOwnership} from "../../entity/champion-ownership";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user : User = {} as User;
  expBarWidth: string = "";
  levelBorder: string = "";
  rank: string = "";
  champions: Array<ChampionOwnership> = [];

  constructor(private router: Router, private userService: UserService, private championLinkService: ChampionOwnershipService) { }

  ngOnInit(): void {
    let savedUser = JSON.parse(<any>localStorage.getItem("principal"));
    this.userService.getUserByUsername(savedUser.username).subscribe(user => {
      this.user = user;
      this.getOwnedChampions();
      this.calculateProgressBarWidth();
      this.setLevelBorder();
      localStorage.setItem("principal", JSON.stringify(user));
    })
  }

  getOwnedChampions() {
    this.championLinkService.getChampionOwnershipsByUsername(this.user.username).subscribe(data => {
      this.champions = data;
    });
  }

  toAdmin() {
    this.router.navigate(["/admin"]);
  }

  logout() {
    localStorage.setItem("access_token", "");
    localStorage.setItem("refresh_token", "");
    localStorage.setItem("principal", "");
    localStorage.setItem("game_entity", "");
    this.router.navigate(["/login"]);
  }

  calculateProgressBarWidth() {
    let width = this.user.exp * 0.1;
    this.expBarWidth = width + "%";
  }

  setLevelBorder() {

    if(this.user.level >= 1 && this.user.level < 5) {
      this.levelBorder = "#808a96";
      this.rank = "LEAD I";
    }

    if(this.user.level >= 5 && this.user.level < 10) {
      this.levelBorder = "#476180";
      this.rank = "LEAD II";
    }

    if(this.user.level >= 10 && this.user.level < 15) {
      this.levelBorder = "#521e02";
      this.rank = "BRONZE I";
    }

    if(this.user.level >= 15 && this.user.level < 20) {
      this.levelBorder = "#7a1105";
      this.rank = "BRONZE II";
    }

    if(this.user.level >= 20 && this.user.level < 25) {
      this.rank = "SILVER I";
      this.levelBorder = "#a1a1a1";
    }

    if(this.user.level >= 25 && this.user.level < 30) {
      this.rank = "SILVER II";
      this.levelBorder = "#ffffff";
    }

    if(this.user.level >= 30 && this.user.level < 35) {
      this.rank = "GOLD I";
      this.levelBorder = "#6e6300";
    }

    if(this.user.level >= 35 && this.user.level < 40) {
      this.rank = "GOLD II";
      this.levelBorder = "#f0d702";
    }

    if(this.user.level >= 40 && this.user.level < 45) {
      this.rank = "DIAMOND I";
      this.levelBorder = "#00598c";
    }

    if(this.user.level >= 45 && this.user.level < 50) {
      this.rank = "DIAMOND II";
      this.levelBorder = "#75cdff";
    }

    if(this.user.level >= 50 && this.user.level < 55) {
      this.rank = "URANIUM I";
      this.levelBorder = "#2eff43";
    }

    if(this.user.level >= 55 && this.user.level < 60) {
      this.rank = "URANIUM II";
      this.levelBorder = "#00780c";
    }

    if(this.user.level >= 60 && this.user.level < 65) {
      this.rank = "ROYALTY I";
      this.levelBorder = "#ff00fb";
    }

    if(this.user.level >= 65 && this.user.level < 70) {
      this.rank = "ROYALTY II";
      this.levelBorder = "#7a0078";
    }

    if(this.user.level >= 70) {
      this.rank = "GOD";
      this.levelBorder = "#70ffde";
    }
  }

}
