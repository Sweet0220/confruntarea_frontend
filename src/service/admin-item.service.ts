import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminItemService {

  itemMenuToggle: boolean = true;
  itemViewToggle: boolean = false;
  itemAddToggle: boolean = false;
  name: string = "";

  constructor() { }

  toggleItemMenu() {
    this.itemMenuToggle = true;
    this.itemViewToggle = false;
    this.itemAddToggle = false;
  }

  toggleItemAdd() {
    this.itemMenuToggle = false;
    this.itemViewToggle = false;
    this.itemAddToggle = true;
  }

  toggleItemView(name: string) {
    this.itemMenuToggle = false;
    this.itemViewToggle = true;
    this.itemAddToggle = false;
    this.name = name;
  }
}
