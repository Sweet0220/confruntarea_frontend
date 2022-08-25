import { Component, OnInit } from '@angular/core';
import {ItemService} from "../../../../service/item.service";
import {Item} from "../../../../entity/item";
import {AdminItemService} from "../../../../service/admin-item.service";

@Component({
  selector: 'app-admin-item-menu',
  templateUrl: './admin-item-menu.component.html',
  styleUrls: ['./admin-item-menu.component.css']
})
export class AdminItemMenuComponent implements OnInit {

  items: Array<Item> = [];

  constructor(private itemService: ItemService, private adminItemService: AdminItemService) { }

  ngOnInit(): void {
    this.getAllItems();
  }

  toggleItemView(name: string) {
    this.adminItemService.toggleItemView(name);
  }

  getAllItems() {
    this.itemService.getAllItems().subscribe(items => {
      this.items = items;
    });
  }

}
