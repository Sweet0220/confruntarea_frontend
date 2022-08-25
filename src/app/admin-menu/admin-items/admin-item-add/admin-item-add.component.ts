import { Component, OnInit } from '@angular/core';
import {AdminItemService} from "../../../../service/admin-item.service";
import {ItemService} from "../../../../service/item.service";
import {Item} from "../../../../entity/item";

@Component({
  selector: 'app-admin-item-add',
  templateUrl: './admin-item-add.component.html',
  styleUrls: ['./admin-item-add.component.css']
})
export class AdminItemAddComponent implements OnInit {

  constructor(private adminItemService: AdminItemService, private itemService: ItemService) { }

  ngOnInit(): void {
  }

  toggleMainMenu() {
    this.adminItemService.toggleItemMenu();
  }

  addNewItem() {

    const nameInput = <HTMLInputElement>document.getElementById("name_input");
    const name: string = nameInput.value;

    const hpInput = <HTMLInputElement>document.getElementById("hp_input");
    const hp: number = hpInput.valueAsNumber;

    const damageInput = <HTMLInputElement>document.getElementById("damage_input");
    const damage: number = damageInput.valueAsNumber;

    const priceInput = <HTMLInputElement>document.getElementById("price_input");
    const price: number = priceInput.valueAsNumber;

    const typeInput = <HTMLInputElement>document.getElementById("type_input");
    const type: string = typeInput.value;

    const pictureInput = <HTMLInputElement>document.getElementById("picture_input");
    const picture: string = pictureInput.value;

    const nameColorInput = <HTMLInputElement>document.getElementById("nameColor_input");
    const nameColor: string = nameColorInput.value;

    if(name != "" && hp != null && damage != null && price != null && type != "" && picture != "" && nameColor != "") {
      const item: Item = new Item(name, damage, hp, price, type, picture, nameColor);
      this.itemService.addNewItem(item).subscribe({error: _ => {
          this.adminItemService.toggleItemMenu();
        }});
    }
  }



}
