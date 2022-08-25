import { Component, OnInit } from '@angular/core';
import { ChampionService } from "../../../../service/champion.service";
import {Champion} from "../../../../entity/champion";
import {AdminChampionService} from "../../../../service/admin-champion.service";
import {debounceTime, Observable, of} from "rxjs";

@Component({
  selector: 'app-admin-champion-menu',
  templateUrl: './admin-champion-menu.component.html',
  styleUrls: ['./admin-champion-menu.component.css']
})
export class AdminChampionMenuComponent implements OnInit {

  champions: Array<Champion> = [];

  constructor(private championService: ChampionService, private adminChampionService: AdminChampionService) { }

  getAllChampions() {
    this.champions = [];
    this.championService.getAllChampions().subscribe(champions => {
      console.log(champions);
      this.champions = champions;
    });
  }

  toggleChampionView(name: string) {
    this.adminChampionService.toggleChampionView(name);
  }

  ngOnInit(): void {
    this.getAllChampions();
  }

}
