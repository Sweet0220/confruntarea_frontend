import { Injectable } from '@angular/core';
import {ChampionService} from "./champion.service";
import {AdminMenuComponent} from "../app/admin-menu/admin-menu.component";

@Injectable({
  providedIn: 'root'
})
export class AdminChampionService {

  championMenuToggle: boolean = true;
  championViewToggle: boolean = false;
  championAddToggle: boolean = false;
  name: string = "";

  constructor(private championService: ChampionService) { }

  toggleMainMenu() {
    this.championViewToggle = false;
    this.championAddToggle = false;
    this.championMenuToggle = true;
  }

  toggleChampionView(name: string) {
    this.championMenuToggle = false;
    this.championViewToggle = true;
    this.name = name;
  }


}
