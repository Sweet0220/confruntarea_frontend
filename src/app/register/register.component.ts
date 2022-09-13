import {Component, HostListener, OnInit} from '@angular/core';
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
  badInfo: boolean = false;
  message: string = "";
  email: string = "";

  constructor(private userService: UserService, private router: Router) { }

  @HostListener('document:keydown', ['$event'])
  async attemptLogin(event: KeyboardEvent) {
    if(event.key == 'Enter') {
      await this.submit();
    }
  }

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
      this.badInfo = false;
      this.loading = true;
      this.userService.registerUser(this.newUser).subscribe( data => {
        this.loading = false;
        this.info = true;
      }, error => {
        this.message = error.error;
        this.loading = false;
        this.badInfo = true;
      });
    }
  }

  login() {
    this.router.navigate(['/login']);
  }


}
