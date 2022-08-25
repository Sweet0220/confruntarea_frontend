import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AdminUserServiceService} from "../../../service/admin-user-service.service";
import {User} from "../../../entity/user";
import {UserService} from "../../../service/user.service";
import {AdminUserMenuComponent} from "../admin-user-menu/admin-user-menu.component";

@Component({
  providers: [AdminUserMenuComponent],
  selector: 'app-admin-user-view',
  templateUrl: './admin-user-view.component.html',
  styleUrls: ['./admin-user-view.component.css']
})
export class AdminUserViewComponent implements OnInit {

  user: User;
  chooseImage: boolean = false;

  constructor(public adminUserService: AdminUserServiceService, private userService: UserService, private userMenu: AdminUserMenuComponent,
  emailInput: ElementRef) {
    this.user = {} as User;
  }

  ngOnInit(): void {
    this.user = {} as User;
    this.userService.getUserByUsername(this.adminUserService.username).subscribe(user => {
      this.user = user;
    });
  }

  deleteUser() {
    this.userService.deleteUser(this.user.username).subscribe({error: _ => {
        this.adminUserService.toggleUserMenu();
      }});
  }

  updateUser() {

    const email_input = <HTMLInputElement>document.getElementById("email_input");
    const email: string = email_input.value;

    const password_input = <HTMLInputElement>document.getElementById("password_input");
    const password: string = password_input.value;

    const funds_input = <HTMLInputElement>document.getElementById("funds_input");
    const funds: number = funds_input.valueAsNumber;

    const level_input = <HTMLInputElement>document.getElementById("level_input");
    const level: number = level_input.valueAsNumber;

    const exp_input = <HTMLInputElement>document.getElementById("exp_input");
    const exp: number = exp_input.valueAsNumber;

    if(email != "") {
      this.user.email = email;
    }

    if(password != "") {
      this.user.password = password;
    }

    if(funds != null) {
      this.user.funds = funds;
    }

    if(level != null) {
      this.user.level = level;
    }

    if(exp != null && exp < 1000) {
      this.user.exp = exp;
    }

    this.userService.updateUser(this.user).subscribe({error: _ => {
        this.adminUserService.toggleUserMenu();
      }});
  }

  setImage1() {
    this.user.picture = "img1.webp";
    this.chooseImage = false;
  }

  setImage2() {
    this.user.picture = "img2.webp";
    this.chooseImage = false;
  }

  setImage3() {
    this.user.picture = "img3.webp";
    this.chooseImage = false;
  }

  setImage4() {
    this.user.picture = "img4.webp";
    this.chooseImage = false;
  }

  setImage5() {
    this.user.picture = "img5.webp";
    this.chooseImage = false;
  }

  setImage6() {
    this.user.picture = "img6.webp";
    this.chooseImage = false;
  }

}
