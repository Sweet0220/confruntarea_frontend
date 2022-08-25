import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MailService} from "../../../service/mail.service";
import {timeout} from "rxjs";

@Component({
  selector: 'app-forgot-username',
  templateUrl: './forgot-username.component.html',
  styleUrls: ['./forgot-username.component.css']
})
export class ForgotUsernameComponent implements OnInit {

  loading: boolean = false;
  text: boolean = false;

  constructor(private router: Router, private mailService: MailService) { }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate(['/login']);
  }

  sendMail() {
    let emailInput = <HTMLInputElement>document.getElementById("username_input");
    let email: string = emailInput.value;
    if(email != ""){
      this.text = false;
      this.loading = true;
        this.mailService.sendUsernamesMail(email).subscribe(data => {
            this.loading = false;
            this.text = true;
          }, async error => {
          this.text = true;
          this.loading = false;
          await new Promise(f => setTimeout(f, 0));
          let info: any = document.getElementById("info_text");
          info.innerHTML = "No usernames for the given email..";
        });
    }

  }

}
