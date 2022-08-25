import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {JwtService} from "../../jwt/service/jwt.service";
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private jwtService: JwtService) { }

  ngOnInit(): void {
    localStorage.setItem("accessToken", "");
    localStorage.setItem("refreshToken", "");
    localStorage.setItem("principal", "");
  }

  logon() {
    const usernameInput = <HTMLInputElement>document.getElementById("username_input");
    let username: string = usernameInput.value;
    const passwordInput = <HTMLInputElement>document.getElementById("password_input");
    let password: string = passwordInput.value;

    if(username != "" && password != "") {
      this.userService.loginUser(username, password).subscribe((resp) => {
        localStorage.setItem("accessToken", resp.body.access_token);
        localStorage.setItem("refreshToken",resp.body.refresh_token);

        const tokenInfo: any = jwt_decode(resp.body.access_token);
        const username = tokenInfo.sub;
        this.userService.getUserByUsername(username).subscribe(user => {
          console.log(JSON.stringify(user));
          localStorage.setItem("principal", JSON.stringify(user));
          if(user.role == "admin") {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/game']);
          }
        });
      });
    }
  }

  register() {
    this.router.navigate(['/register']);
  }

  forgotUsername() {
    this.router.navigate(['/forgot-username']);
  }

  forgotPassword() {
    this.router.navigate(['/forgot-password']);
  }
}


