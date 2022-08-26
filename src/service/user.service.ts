import { Injectable } from '@angular/core';
import {HttpClient, HttpContext, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from 'rxjs/operators'
import {User} from "../entity/user";
import {environment} from "../environments/environment";
import {JwtService} from "../jwt/service/jwt.service";
import {UserRegister} from "../entity/user-register";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsersURL = environment.USERS_ROOT;
  login = environment.LOGIN;

  constructor(private http: HttpClient, private jwtService: JwtService) { }

  registerUser(user: UserRegister): Observable<any> {
    return this.http.post(this.getUsersURL + "/user-register", user, {responseType: "text"});
  }

  getAllUsers(): Observable<any> {
    const header = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
    });
    return this.http.get(`${this.getUsersURL}`, {headers: header});
  }

  getUserByUsername(username: string): Observable<any> {
    return this.http.get(`${this.getUsersURL}` + "/username/" + username);
  }
  getUserByUsernameHeader(username: string): Observable<any> {
    return this.http.get(`${this.getUsersURL}` + "/username/" + username, {observe: "response"});
  }

  getUsersByEmail(email: string): Observable<any> {
    return this.http.get(`${this.getUsersURL}` + "/email/" + email);
  }

  deleteUser(username: string): Observable<any> {
    const header = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
    });
    return this.http.delete(`${this.getUsersURL}` + "/delete/" + username, {headers: header});
  }

  updateUser(user: User) {
    const body = { username: user.username,
                   password: user.password,
                   email: user.email,
                   funds: user.funds,
                   picture: user.picture,
                   level: user.level,
                   exp: user.exp };
    const header = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
    });
    return this.http.put<User>(`${this.getUsersURL}` + "/update/" + user.username, body, {headers: header});
  }

  loginUser(username: string, password: string): Observable<any> {
    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);

    return this.http.post(this.login, body.toString(), {observe: "response", headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')});
  }

  public purchase(username: string, championPrice: number): Observable<any> {
    const header = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
    });
    return this.http.put(this.getUsersURL + "/purchase/" + username + "/" + championPrice, null, {responseType: "text", headers: header});
  }

}
