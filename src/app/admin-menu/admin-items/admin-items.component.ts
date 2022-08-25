import { Component, OnInit } from '@angular/core';
import {AdminItemService} from "../../../service/admin-item.service";

@Component({
  selector: 'app-admin-items',
  templateUrl: './admin-items.component.html',
  styleUrls: ['./admin-items.component.css']
})
export class AdminItemsComponent implements OnInit {

  constructor(private adminItemService: AdminItemService) { }

  ngOnInit(): void {
  }

  toggleAddMenu() {
    this.adminItemService.toggleItemAdd();
  }


  get getMenuToggle() {
    return this.adminItemService.itemMenuToggle;
  }

  get getAddToggle() {
    return this.adminItemService.itemAddToggle;
  }

  get getViewToggle() {
    return this.adminItemService.itemViewToggle;
  }

}
