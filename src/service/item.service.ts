import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "../entity/item";
import {JwtService} from "../jwt/service/jwt.service";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  getItemsURL = environment.ITEMS_ROOT;

  constructor(private http: HttpClient, private jwtService: JwtService) { }

  getAllItems(): Observable<any> {
    const header = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
    });
    return this.http.get(`${this.getItemsURL}`, {headers: header});
  }

  getItemByName(name: string): Observable<any> {
    const header = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
    });
    return this.http.get(`${this.getItemsURL}` + "/name/" + name, {headers: header});
  }

  getItemsByType(type: string): Observable<any> {
    const header = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
    });
    return this.http.get(this.getItemsURL + "/type/" + type, {headers: header});
  }

  addNewItem(item: Item): Observable<any> {
    const header = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
    });
    return this.http.post(`${this.getItemsURL}` + "/add", item, {headers: header});
  }

  deleteItem(name: string): Observable<any> {
    const header = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
    });
    return this.http.delete(`${this.getItemsURL}` + "/delete/" + name, {headers: header});
  }

  updateItem(name: string, item: Item): Observable<any> {
    const header = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
    });
    return this.http.put(`${this.getItemsURL}` + "/update/" + name, item, {headers: header});
  }

}
