import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserService} from "./user.service";
import {Observable} from "rxjs";
import {UserLogin} from "../entity/user-login";

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  path: string = "http://localhost:8080/reset-password";

  constructor(private http: HttpClient, private userService: UserService) { }

  public sendEmail(username: string):Observable<any> {
    return this.http.get(this.path + "/for/" + username, {responseType: "text"});
  }

  public verify(token: string, username: string): Observable<any> {
    return this.http.get(this.path + "/verify" + "?token=" + token + "&username=" + username, {responseType: "text"});
  }

  public changePassword(token: string, credentials: UserLogin): Observable<any> {
    return this.http.post(this.path + "/change?token=" + token, credentials, {responseType: "text"});
  }
}
