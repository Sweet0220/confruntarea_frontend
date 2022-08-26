import { Component, OnInit } from '@angular/core';
import {UserRegister} from "../../entity/user-register";
import {User} from "../../entity/user";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser: UserRegister = {} as UserRegister;
  loading: boolean = false;
  info: boolean = false;
  email: string = "";

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    const usernameInput = <HTMLInputElement>document.getElementById("username_input");
    const username = usernameInput.value;

    const emailInput = <HTMLInputElement>document.getElementById("email_input");
    const email = emailInput.value;

    const passwordInput1 = <HTMLInputElement>document.getElementById("password_input");
    const password1 = passwordInput1.value;

    const passwordInput2 = <HTMLInputElement>document.getElementById("password_input2");
    const password2 = passwordInput2.value;

    if(username != "" && email != "" && password1 != "" && password2 != "" && password1 == password2) {
      this.newUser.username = username;
      this.newUser.email = email;
      this.newUser.password = password1;
      this.email = email;
      this.loading = true;
      this.userService.registerUser(this.newUser).subscribe( _ => {
        this.loading = false;
        this.info = true;
      });
    }
  }

  login() {
    this.router.navigate(['/login']);
  }

}
