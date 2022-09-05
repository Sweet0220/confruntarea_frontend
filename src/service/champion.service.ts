import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Champion} from "../entity/champion";
import {JwtService} from "../jwt/service/jwt.service";

@Injectable({
  providedIn: 'root'
})
export class ChampionService {

  getChampionsURL = environment.CHAMPIONS_ROOT;

  usersToggle: boolean = true;
  championsToggle: boolean = false;
  itemsToggle: boolean = false;
  abilitiesToggle: boolean = false;
  monstersToggle: boolean = false;
  excelToggle: boolean = false;
  pdfToggle: boolean = false;

  constructor(private http: HttpClient, private jwtService: JwtService) { }

  getAllChampions(): Observable<any> {
    const header = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
    });
    return this.http.get(`${this.getChampionsURL}`, {headers: header});
  }

  getChampionByName(name: string): Observable<any> {
    const header = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
    });
    return this.http.get(`${this.getChampionsURL}` + "/name/" + name, {headers: header});
  }

  addNewChampion(champion: Champion) {
    const header = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
    });
    return this.http.post(`${this.getChampionsURL}` + "/add", champion, {headers: header});
  }

  deleteChampion(name: string) {
    const header = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
    });
    return this.http.delete(`${this.getChampionsURL}` + "/delete/" + name, {headers: header});
  }

  updateChampion(champion: Champion) {
    let name: string = champion.name;
    const body = {
      hp: champion.hp,
      baseDamage: champion.baseDamage,
      price: champion.price,
      mana: champion.mana,
      picture: champion.picture,
      nameColor: champion.nameColor
    }
    const header = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
    });
    return this.http.put(`${this.getChampionsURL}` + "/update/" + name, body, {headers: header});
  }

  toggleUsers() {
    this.usersToggle = true;
    this.championsToggle = false;
    this.itemsToggle = false;
    this.abilitiesToggle = false;
    this.monstersToggle = false;
    this.excelToggle = false;
    this.pdfToggle = false;
  }

  toggleChampions() {
    this.usersToggle = false;
    this.championsToggle = true;
    this.itemsToggle = false;
    this.abilitiesToggle = false;
    this.monstersToggle = false;
    this.excelToggle = false;
    this.pdfToggle = false;
  }

  toggleItems() {
    this.usersToggle = false;
    this.championsToggle = false;
    this.itemsToggle = true;
    this.abilitiesToggle = false;
    this.monstersToggle = false;
    this.excelToggle = false;
    this.pdfToggle = false;

  }

  toggleAbilities() {
    this.usersToggle = false;
    this.championsToggle = false;
    this.itemsToggle = false;
    this.abilitiesToggle = true;
    this.monstersToggle = false;
    this.excelToggle = false;
    this.pdfToggle = false;

  }

  toggleMonsters() {
    this.usersToggle = false;
    this.championsToggle = false;
    this.itemsToggle = false;
    this.abilitiesToggle = false;
    this.monstersToggle = true;
    this.excelToggle = false;
    this.pdfToggle = false;

  }

  toggleExcel() {
    this.usersToggle = false;
    this.championsToggle = false;
    this.itemsToggle = false;
    this.abilitiesToggle = false;
    this.monstersToggle = false;
    this.excelToggle = true;
    this.pdfToggle = false;

  }

  togglePdf() {
    this.usersToggle = false;
    this.championsToggle = false;
    this.itemsToggle = false;
    this.abilitiesToggle = false;
    this.monstersToggle = false;
    this.excelToggle = false;
    this.pdfToggle = true;

  }

}
