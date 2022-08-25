import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {ChampionOwnership} from "../entity/champion-ownership";

@Injectable({
  providedIn: 'root'
})
export class ChampionOwnershipService {

  rootURL: string = environment.CHAMPION_O_ROOT;

  constructor(private http: HttpClient) { }

  public getChampionOwnershipsByUsername(username: string): Observable<any> {
    const header = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
    });
    return this.http.get(this.rootURL + "/user-name/" + username, {headers: header});
  }

  public linkChampionToUser(username: string, championName: string): Observable<any> {
    const header = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
    });
    return this.http.post(this.rootURL + "/link-user/" + username + "/to-champion/" + championName, {headers: header, "level" : 1}, {responseType: "text"});
  }
}
