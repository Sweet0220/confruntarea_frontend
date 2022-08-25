import { Component, OnInit } from '@angular/core';
import {AdminChampionService} from "../../../service/admin-champion.service";

@Component({
  providers: [AdminChampionService],
  selector: 'app-admin-champions',
  templateUrl: './admin-champions.component.html',
  styleUrls: ['./admin-champions.component.css']
})
export class AdminChampionsComponent implements OnInit {

  constructor(private adminChampionService: AdminChampionService) { }

  ngOnInit(): void {
  }

  toggleAddNewChampion() {
    this.adminChampionService.championAddToggle = true;
    this.adminChampionService.championMenuToggle = false;
  }

  get getChampionMenuToggle() {
    return this.adminChampionService.championMenuToggle;
  }

  get getChampionAddToggle() {
    return this.adminChampionService.championAddToggle;
  }

  get getChampionViewToggle() {
    return this.adminChampionService.championViewToggle;
  }

}
