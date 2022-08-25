import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {Monster} from "../entity/monster";
import {JwtService} from "../jwt/service/jwt.service";

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  monstersURL = environment.MONSTERS_ROOT;

  constructor(private http: HttpClient, private jwtService: JwtService) { }

  getAllMonsters(): Observable<any> {
    const header = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
    });
    return this.http.get(`${this.monstersURL}`, {headers: header});
  }

  addNewMonster(monster: Monster): Observable<any> {
    const header = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
    });
    return this.http.post(`${this.monstersURL}` + "/add", monster, {headers: header});
  }

  getMonsterByName(name: string): Observable<any> {
    const header = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
    });
    return this.http.get(`${this.monstersURL}` + "/name/" + name, {headers: header});
  }

  deleteMonster(name: string): Observable<any> {
    const header = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
    });
    return this.http.delete(`${this.monstersURL}` + "/delete/" + name, {headers: header});
  }

  updateMonster(monster: Monster): Observable<any> {
    const header = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
    });
    return this.http.put(`${this.monstersURL}` + "/update/" + monster.name, monster, {headers: header});
  }

}
