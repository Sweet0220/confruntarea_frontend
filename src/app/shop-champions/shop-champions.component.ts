import { Component, OnInit } from '@angular/core';
import {ChampionService} from "../../service/champion.service";
import {Champion} from "../../entity/champion";
import {User} from "../../entity/user";
import {ShopService} from "../../service/shop.service";
import {ChampionOwnershipService} from "../../service/champion-ownership.service";

@Component({
  selector: 'app-shop-champions',
  templateUrl: './shop-champions.component.html',
  styleUrls: ['./shop-champions.component.css']
})
export class ShopChampionsComponent implements OnInit {

  user: User = JSON.parse(<any>localStorage.getItem("principal"));

  champions: Array<Champion> = [];

  ownedChampions: Array<Champion> = [];

  constructor(private championService: ChampionService, private shopService: ShopService, private championLinkService: ChampionOwnershipService) { }

  async ngOnInit() {
    this.loadChampions();
    this.loadOwnedChampions();
    await new Promise(f => setTimeout(f, 0));
    console.log(this.ownedChampions);
  }

  loadChampions() {
    this.championService.getAllChampions().subscribe(champions => {
      this.champions = champions;
    })
  }

  toggleChampionPreview(champion: Champion) {
    this.shopService.toggleChampionPreview(champion);
  }

  loadOwnedChampions() {
    this.championLinkService.getChampionOwnershipsByUsername(this.user.username).subscribe(links => {
      for(let link of links) {
        let champ: Champion = new Champion(link.champion.name, link.champion.hp, link.champion.baseDamage, link.champion.price,
          link.champion.mana, link.champion.picture, link.champion.nameColor);
        this.ownedChampions.push(champ);
      }
    });
  }

  isOwned(champion: Champion): boolean {
    for(let champ of this.ownedChampions) {
      if(champ.name == champion.name) {
        return true;
      }
    }
    return false;
  }

}
