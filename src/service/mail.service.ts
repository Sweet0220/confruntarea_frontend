import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../entity/user";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class MailService {

  forgotUsernamePath: String = "http://localhost:8080/mail/usernames/"

  constructor(private http: HttpClient, private userService: UserService) { }

  sendUsernamesMail(email: string): Observable<any> {
    const header = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
    });
    let allUsers: Array<User>;
    this.userService.getUsersByEmail(email).subscribe(users => {
      if(users == null){
        throw new Error("Invalid email!");
      }
    });
    return this.http.get(this.forgotUsernamePath + email, {headers: header, responseType: "text"});
  }
}
