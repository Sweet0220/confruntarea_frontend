import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  path: string = "http://localhost:8080/export/pdf"
  header = new HttpHeaders({
    responseType: "application/octet-stream",
    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
  });

  constructor(private http: HttpClient) { }

  public exportUsers(): Observable<any> {
    return this.http.get(this.path + "/users", {headers: this.header, observe: "response", responseType: "blob"});
  }

  public exportChampions(): Observable<any> {
    return this.http.get(this.path + "/champions", {headers: this.header, observe: "response", responseType: "blob"});
  }

  public exportItems(): Observable<any> {
    return this.http.get(this.path + "/items", {headers: this.header, observe: "response", responseType: "blob"});
  }

  public exportAbilities(): Observable<any> {
    return this.http.get(this.path + "/abilities", {headers: this.header, observe: "response", responseType: "blob"});
  }

  public exportMonsters(): Observable<any> {
    return this.http.get(this.path + "/monsters", {headers: this.header, observe: "response", responseType: "blob"});
  }

}
