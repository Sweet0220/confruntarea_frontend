import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ItemOwnership} from "../entity/item-ownership";

@Injectable({
  providedIn: 'root'
})
export class ItemOwnershipService {

  header = new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
  });
  path: string = environment.ITEM_O_ROOT;

  constructor(private http: HttpClient) { }

  public getByUsername(username: string): Observable<any> {
    return this.http.get(this.path + "/username/" + username, {headers: this.header});
  }

  public getByUsernameAndItemName(username: string, itemName: string): Observable<any> {
    return this.http.get(this.path + "/username/" + username + "/item-name/" + itemName, {headers: this.header});
  }

  public updateCount(id: number, link: ItemOwnership): Observable<any> {
    return this.http.put(this.path + "/update/" + id, link, {headers: this.header, responseType: "text"});
  }

  public increaseCount(id: number): Observable<any> {
    return this.http.get(this.path + "/increase/" + id, {headers: this.header, responseType: "text"});
  }

  public decreaseCount(id: number): Observable<any> {
    return this.http.get(this.path + "/decrease/" + id, {headers: this.header, responseType: "text"});
  }

}
