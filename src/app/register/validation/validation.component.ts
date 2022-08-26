import { Component, OnInit } from '@angular/core';
import {ResetPasswordService} from "../../../service/reset-password.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  goodInfo: boolean = false;
  badInfo: boolean = false;
  token: string = "";
  username: string = "";
  errorText: string = "";

  constructor(private validationService: ResetPasswordService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.validateAccount();
  }

  validateAccount() {
    this.token = <string>this.route.snapshot.queryParamMap.get("token");
    this.username = <string>this.route.snapshot.queryParamMap.get("username");
    this.validationService.validateAccount(this.token, this.username).subscribe(data => {
      this.goodInfo = true;
      this.badInfo = false;
    }, error => {
      this.badInfo = true;
      this.goodInfo = false;
      if(error.error == "Token expired!") {
        this.errorText = "This link has expired. You have to create a new account now. =P"
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
    })
  }

  login() {
    this.router.navigate(['/login']);
  }

}
