import { Component, OnInit } from '@angular/core';
import {AdminChampionService} from "../../../../service/admin-champion.service";
import {Champion} from "../../../../entity/champion";
import {ChampionService} from "../../../../service/champion.service";

@Component({
  selector: 'app-admin-champion-add',
  templateUrl: './admin-champion-add.component.html',
  styleUrls: ['./admin-champion-add.component.css']
})
export class AdminChampionAddComponent implements OnInit {

  constructor(private adminChampionService: AdminChampionService, private championService: ChampionService) { }

  ngOnInit(): void {
  }

  toggleMainMenu() {
    this.adminChampionService.toggleMainMenu();
  }

  submitNewChampion() {

    const nameInput = <HTMLInputElement>document.getElementById("name_input");
    const name: string = nameInput.value;

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

    if(name != "" && hp != null && damage != null && price != null && mana != null && picture != "" && nameColor != "") {

      let champion: Champion = new Champion(name,hp,damage,price,mana,picture,nameColor);
      this.championService.addNewChampion(champion).subscribe({error: _ => {
          this.adminChampionService.toggleMainMenu();
        }});
    }

  }

}
