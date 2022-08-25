import { Injectable } from '@angular/core';
import {ChampionService} from "./champion.service";

@Injectable({
  providedIn: 'root'
})
export class AdminUserServiceService {

  username: string;
  userMenuToggle: boolean = true;
  userViewToggle: boolean = false;
  bottomBar: boolean = false;
  usernamePlaceholder: boolean = true;

  constructor(private championService: ChampionService) {
    this.username = "";
  }

  toggleUserView() {
    this.userMenuToggle = false;
    this.userViewToggle = true;
  }

  toggleUserMenu() {
    this.userMenuToggle = true;
    this.userViewToggle = false;
  }

  changeUsername(username: string) {
    this.username = username;
  }

}
