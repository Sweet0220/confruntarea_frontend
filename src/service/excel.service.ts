import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  path: string = "http://localhost:8080/export/excel";
  importPath: string = "http://localhost:8080/import/excel";
  header = new HttpHeaders({
    responseType: "application/octet-stream",
    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
  });

  constructor(private http: HttpClient) { }

  public exportAllEntities(): Observable<any> {
    return this.http.get(this.path, {headers: this.header, observe: "response",responseType: "blob"});
  }

  public exportUsers(): Observable<any> {
    return this.http.get(this.path + "/users", {headers: this.header, observe: "response",responseType: "blob"});
  }

  public exportChampions(): Observable<any> {
    return this.http.get(this.path + "/champions", {headers: this.header, observe: "response",responseType: "blob"});
  }

  public exportItems(): Observable<any> {
    return this.http.get(this.path + "/items", {headers: this.header, observe: "response",responseType: "blob"});
  }

  public exportAbilities(): Observable<any> {
    return this.http.get(this.path + "/abilities", {headers: this.header, observe: "response",responseType: "blob"});
  }

  public exportMonsters(): Observable<any> {
    return this.http.get(this.path + "/monsters", {headers: this.header, observe: "response",responseType: "blob"});
  }

  public importChampions(file: any): Observable<any> {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(this.importPath + "/champions", formData, {headers: this.header, observe: "response", responseType: "text"});
  }

  public exportFailedChampions(): Observable<any> {
    return this.http.get(this.importPath + "/champions/failed", {headers: this.header, observe: "response", responseType: "blob"});
  }

}
