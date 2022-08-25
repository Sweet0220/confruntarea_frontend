import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ResetPasswordService} from "../../../../service/reset-password.service";
import {UserLogin} from "../../../../entity/user-login";

@Component({
  selector: 'app-reset-form',
  templateUrl: './reset-form.component.html',
  styleUrls: ['./reset-form.component.css']
})
export class ResetFormComponent implements OnInit {

  token: string = "";
  username: string = "";
  errorText: string = '';
  loading: boolean = false;
  info: boolean = false;

  constructor(private route: ActivatedRoute, private resetService: ResetPasswordService) { }

  ngOnInit(): void {
    this.token = <string>this.route.snapshot.queryParamMap.get("token");
    this.username = <string>this.route.snapshot.queryParamMap.get("username");
    this.resetService.verify(this.token,this.username).subscribe(_ => {}, error => {
      if(error.error == "Token expired!") {
        this.errorText = "This link has expired. Send another request to get a new link. Told you to move quickly =P."
      }
      if(error.error == "Token invalid!") {
        this.errorText = "Your token is invalid. You messed it up, didn't you? -_-";
      }
      if(error.error == "Username invalid!") {
        this.errorText = "The username is invalid. You messed it up, didn't you? -_-";
      }
      if(error.error == "Token does not exist!") {
        this.errorText = "The link has already been used..";
      }
    });
  }

  changePassword() {
    this.loading = true;

    let passwordInput1 = <HTMLInputElement>document.getElementById("password_input1");
    let password1: string = passwordInput1.value;

    let passwordInput2 = <HTMLInputElement>document.getElementById("password_input2");
    let password2: string = passwordInput2.value;

    if(password1 != "" && password2 != "" && password1 == password2) {
      let credentials: UserLogin = new UserLogin(this.username, password1);
      this.resetService.changePassword(this.token, credentials).subscribe(data => {
        this.errorText = "Password changed successfully! You can now close this page.";
      }, error => {
        if(error.error == "Token expired!") {
          this.errorText = "This link has expired. Send another request to get a new link. Told you to move quickly =P."
        }
        if(error.error == "Token invalid!") {
          this.errorText = "Your token is invalid. You messed it up, didn't you? -_-";
        }
        if(error.error == "Username invalid!") {
          this.errorText = "The username is invalid. You messed it up, didn't you? -_-";
        }
      });
    }
  }

}
