import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ResetPasswordService} from "../../../service/reset-password.service";
import {UserService} from "../../../service/user.service";
import {User} from "../../../entity/user";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email: string = "";
  loading: boolean = false;
  goodInfo: boolean = false;
  badInfo: boolean = false;

  constructor(private router: Router, private resetService: ResetPasswordService, private userService: UserService) { }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate(['/login']);
  }

  async sendEmail() {
    let usernameInput = <HTMLInputElement>document.getElementById("username_input");
    let username: string = usernameInput.value;
    this.userService.getUserByUsername(username).subscribe(user => {
      this.email = user.email;
      this.badInfo = false;
      this.loading = true;
      this.resetService.sendEmail(username).subscribe(_ => {
        this.badInfo = false;
        this.loading = false;
        this.goodInfo = true;
      });
      },
      error => {
        this.loading = false;
        this.badInfo = true;
      });
  }

}
