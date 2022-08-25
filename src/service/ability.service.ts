import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {Ability} from "../entity/ability";
import {JwtService} from "../jwt/service/jwt.service";

@Injectable({
  providedIn: 'root'
})
export class AbilityService {

  getAbilitiesURL = environment.ABILITIES_ROOT;

  constructor(private http:HttpClient, private jwtService: JwtService) { }

  getAllAbilities(): Observable<any> {
    const header = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
    });
    return this.http.get(`${this.getAbilitiesURL}`, {headers: header});
  }

  getAbilityByName(name: string): Observable<any> {
    const header = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
    });
    return this.http.get(`${this.getAbilitiesURL}` + "/name/" + name, {headers: header});
  }

  getAbilitiesByChampionName(name: string): Observable<any> {
    const header = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
    });
    return this.http.get(`${this.getAbilitiesURL}` + "/champion_name/" + name, {headers: header});
  }

  addNewAbility(ability: Ability, championName: string): Observable<any> {
    const header = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
    });
    return this.http.post(`${this.getAbilitiesURL}` + "/add/to-champion/" + championName, ability, {headers: header});
  }

  deleteAbility(name: string) {
    const header = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
    });
    return this.http.delete(`${this.getAbilitiesURL}` + "/delete/" + name, {headers: header});
  }

  updateAbility(name: string, ability: Ability) {
    const header = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
    });
    return this.http.put(`${this.getAbilitiesURL}` + "/update/" + name, ability, {headers: header});
  }

}
