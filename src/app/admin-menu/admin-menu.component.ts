import { Component, OnInit } from '@angular/core';
import {AdminUserServiceService} from "../../service/admin-user-service.service";
import {AdminUsersComponent} from "../admin-users/admin-users.component";
import {AdminUserMenuComponent} from "../admin-users/admin-user-menu/admin-user-menu.component";
import {AdminChampionService} from "../../service/admin-champion.service";
import {ChampionService} from "../../service/champion.service";
import {UserService} from "../../service/user.service";
import {User} from "../../entity/user";
import {Router} from "@angular/router";

@Component({
  providers: [AdminUserServiceService],
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {



  constructor(private adminUserService: AdminUserServiceService, private championService: ChampionService, private router: Router) { }

  ngOnInit(): void {
    let principal: any = localStorage.getItem("principal");
    if(principal == "") {
      this.router.navigate(['/login'])
    }
    let currentUser: User = JSON.parse(principal);
    if(currentUser.role != "admin") {
      this.router.navigate(['/game']);
    }
  }

  get getBottomBar() {
    return this.adminUserService.bottomBar;
  }

  get getUsernamePlaceholder() {
    return this.adminUserService.usernamePlaceholder;
  }

  searchByUsername() {
    const input = <HTMLInputElement>document.getElementById("other_input");
    if(input.value != "") {

    }
  }

  toggleUsers() {
    this.championService.toggleUsers();
  }

  toggleChampions() {
    this.championService.toggleChampions();
  }

  toggleItems() {
    this.championService.toggleItems();
  }

  toggleAbilities() {
    this.championService.toggleAbilities();
  }

  toggleMonsters() {
    this.championService.toggleMonsters();
  }

  get getUsersToggle() {
    return this.championService.usersToggle;
  }

  get getChampionsToggle() {
    return this.championService.championsToggle;
  }

  get getItemsToggle() {
    return this.championService.itemsToggle;
  }

  get getAbilitiesToggle() {
    return this.championService.abilitiesToggle;
  }

  get getMonstersToggle() {
    return this.championService.monstersToggle;
  }

}
