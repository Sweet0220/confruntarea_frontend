import {Component, ElementRef, Input, OnInit, SimpleChanges} from '@angular/core';
import {UserService} from "../../../service/user.service";
import {User} from "../../../entity/user";
import {Observable} from "rxjs";
import {AdminUsersComponent} from "../admin-users.component";
import {AdminUserServiceService} from "../../../service/admin-user-service.service";

@Component({
  selector: 'app-admin-user-menu',
  templateUrl: './admin-user-menu.component.html',
  styleUrls: ['./admin-user-menu.component.css']
})
export class AdminUserMenuComponent implements OnInit {

  users: Array<User> = [];

  constructor(private userService: UserService, private adminUserService: AdminUserServiceService) {
  }

  getAllUsers() {
    this.users = [];
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    });

  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getAllUsers();
  }

  toggleUserMenu() {
    this.adminUserService.userMenuToggle = true;
    this.adminUserService.userViewToggle = false;
  }

  toggleUserView(username: string) {
    this.adminUserService.userMenuToggle = false;
    this.adminUserService.userViewToggle = true;
    this.adminUserService.changeUsername(username);
  }

}
