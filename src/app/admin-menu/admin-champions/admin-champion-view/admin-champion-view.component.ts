import { Component, OnInit } from '@angular/core';
import {AdminChampionService} from "../../../../service/admin-champion.service";
import {Champion} from "../../../../entity/champion";
import {ChampionService} from "../../../../service/champion.service";

@Component({
  selector: 'app-admin-champion-view',
  templateUrl: './admin-champion-view.component.html',
  styleUrls: ['./admin-champion-view.component.css']
})
export class AdminChampionViewComponent implements OnInit {

  champion: Champion = {} as Champion;

  constructor(private adminChampionService: AdminChampionService, private championService: ChampionService) { }

  toggleMainMenu() {
    this.adminChampionService.toggleMainMenu();
  }

  ngOnInit(): void {
    let name: string = this.adminChampionService.name;
    this.championService.getChampionByName(name).subscribe(champion => {
      this.champion = champion;
    });
  }

  deleteChampion() {
    this.championService.deleteChampion(this.champion.name).subscribe({error: _ => {
        this.adminChampionService.toggleMainMenu();
      }});
  }

  updateChampion() {
    const hpInput = <HTMLInputElement>document.getElementById("hp_input");
    const hp: number = hpInput.valueAsNumber;

    const damageInput = <HTMLInputElement>document.getElementById("damage_input");
    const damage: number = damageInput.valueAsNumber;

    const priceInput = <HTMLInputElement>document.getElementById("price_input");
    const price: number = priceInput.valueAsNumber;

    const manaInput = <HTMLInputElement>document.getElementById("mana_input");
    const mana: number = manaInput.valueAsNumber;

    const pictureInput = <HTMLInputElement>document.getElementById("picture_input");
    const picture: string = pictureInput.value;

    const nameColorInput = <HTMLInputElement>document.getElementById("nameColor_input");
    const nameColor: string = nameColorInput.value;

    if(hp != null && damage != null && price != null && mana != null && picture != "" && nameColor != "") {
      this.champion.hp = hp;
      this.champion.baseDamage = damage;
      this.champion.price = price;
      this.champion.mana = mana;
      this.champion.picture = picture;
      this.champion.nameColor = nameColor;

      this.championService.updateChampion(this.champion).subscribe({error: _ => {
          this.adminChampionService.toggleMainMenu();
        }});
    }
  }

}
