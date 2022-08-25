import {Component, ElementRef, OnInit, ViewChild, ViewRef} from '@angular/core';
import {AdminUserMenuComponent} from "./admin-user-menu/admin-user-menu.component";
import {AdminUserServiceService} from "../../service/admin-user-service.service";
import {AdminMenuComponent} from "../admin-menu/admin-menu.component";

@Component({
  providers: [AdminUserMenuComponent],
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {


  constructor(private userMenu: AdminUserMenuComponent, private adminUserService: AdminUserServiceService, private adminMenu: AdminMenuComponent) {
  }

  ngOnInit(): void {
  }

  public getAllUsers(): void {
    this.adminUserService.bottomBar = false;
    this.userMenu.getAllUsers();
  }

  get getUserMenuToggle() : boolean {
    return this.adminUserService.userMenuToggle;
  }

  get getUserViewToggle() : boolean {
    return this.adminUserService.userViewToggle;
  }

  toggleSearchByUsername() {
    this.adminUserService.bottomBar = true;
    this.adminUserService.usernamePlaceholder = true;
  }



}
