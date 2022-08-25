import { Component, OnInit } from '@angular/core';
import {Champion} from "../../../entity/champion";
import {ShopService} from "../../../service/shop.service";
import {HttpClient} from "@angular/common/http";
import {Ability} from "../../../entity/ability";
import {AbilityService} from "../../../service/ability.service";
import {User} from "../../../entity/user";
import {ChampionOwnershipService} from "../../../service/champion-ownership.service";
import {ChampionOwnership} from "../../../entity/champion-ownership";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-champion-preview',
  templateUrl: './champion-preview.component.html',
  styleUrls: ['./champion-preview.component.css']
})
export class ChampionPreviewComponent implements OnInit {

  ownedChampions: Array<Champion> = [];
  champion: Champion = {} as Champion
  money: number = 0;
  lore: String = "";
  fadePhoto: String = "";
  champDesc: String = "";
  abilities: Array<Ability> = [];
  abilityDesc1: String = "";
  abilityDesc2: String = "";
  abilityDesc3: String = "";
  bought1: boolean = false;
  bought2: boolean = false;

  constructor(private shopService: ShopService, private http: HttpClient, private abilityService: AbilityService, private championLinkService: ChampionOwnershipService,
              private userService: UserService) {

  }

  ngOnInit(): void {
    this.champion = this.shopService.selectedChampion;
    this.getAbilities();
    this.loadOwnedChampions();
    this.populateLore();
    let photoName: String = this.champion.picture;
    photoName = photoName.slice(0, -4);
    photoName = photoName + "_fade.png";
    this.fadePhoto = photoName;
    let user: User = JSON.parse(<any>localStorage.getItem("principal"));
    this.money = user.funds;
  }

  toggleChampions() {
    this.shopService.toggleChampions();
  }

  private populateLore() {
    let loreFile: String = this.champion.picture.slice(0, -4);
    loreFile = loreFile + ".txt";
    this.http.get('assets/lore/' + loreFile, {responseType: 'text'}).subscribe(data => {
      this.lore = data;
    });

    let descriptionFile: String = this.champion.picture.slice(0, -4);
    descriptionFile = descriptionFile + "_desc.txt";
    this.http.get('assets/lore/' + descriptionFile, {responseType: 'text'}).subscribe(data => {
      this.champDesc = data;
    });
  }

  private getAbilities() {
    this.abilityService.getAbilitiesByChampionName(this.champion.name).subscribe(abilities => {
      this.abilities = abilities;
      if(abilities.length >= 1) {
        let ability1File = abilities[0].picture.slice(0, -4);
        ability1File = ability1File + ".txt";
        this.http.get('assets/lore/abilities/' + ability1File, {responseType: "text"}).subscribe(data => {
          this.abilityDesc1 = data;
        });
      }
    });
  }

  private loadOwnedChampions() {
    let user: User = JSON.parse(<any>localStorage.getItem("principal"));
    this.championLinkService.getChampionOwnershipsByUsername(user.username).subscribe(champions => {
      for(let champion of champions) {
        let newChampion: Champion = new Champion(champion.champion.name, champion.champion.hp, champion.champion.baseDamage,
          champion.champion.price, champion.champion.mana, champion.champion.picture, champion.champion.nameColor);
        this.ownedChampions.push(newChampion);
        this.setButtons();
      }
      console.log(this.ownedChampions);
    });
  }

  setButtons() {
    if(this.owned()) {
      this.bought2 = true;
      this.bought1 = false;
    }
  }

  owned(): boolean {
    for(let champion of this.ownedChampions) {
      if(this.champion.name == champion.name) {
        return true;
      }
    }
    return false;
  }

  public async buyChampion() {
    let user: User = JSON.parse(<any>localStorage.getItem("principal"));
    this.money -= this.champion.price;
    this.bought1 = true;
    await new Promise(f => setTimeout(f, 1500));
    this.championLinkService.linkChampionToUser(user.username, this.champion.name).subscribe(_ => {
      this.userService.purchase(user.username, this.champion.price).subscribe( _ => {
        this.userService.getUserByUsername(user.username).subscribe(updatedUser => {
          user = updatedUser;
          localStorage.setItem("principal", JSON.stringify(user));
          this.shopService.user = user;
          this.bought1 = false;
          this.bought2 = true;
        });
      });
    });
  }

}
