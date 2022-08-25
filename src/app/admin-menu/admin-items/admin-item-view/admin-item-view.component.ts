import { Component, OnInit } from '@angular/core';
import {AdminItemService} from "../../../../service/admin-item.service";
import {Item} from "../../../../entity/item";
import {ItemService} from "../../../../service/item.service";

@Component({
  selector: 'app-admin-item-view',
  templateUrl: './admin-item-view.component.html',
  styleUrls: ['./admin-item-view.component.css']
})
export class AdminItemViewComponent implements OnInit {

  item: Item = {} as Item;

  constructor(private adminItemService: AdminItemService, private itemService: ItemService) { }

  ngOnInit(): void {
    let name = this.adminItemService.name;
    this.itemService.getItemByName(name).subscribe(item => {
      this.item = item;
    });
  }

  deleteItem() {
    this.itemService.deleteItem(this.item.name).subscribe( {error: _ => {
        this.adminItemService.toggleItemMenu();
      }});
  }

  updateItem() {

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

    if(hp != null && damage != null && price != null && type != "" && picture != "" && nameColor != "") {
      this.item.bonusHp = hp;
      this.item.bonusDamage = damage;
      this.item.price = price;
      this.item.type = type;
      this.item.picture = picture;
      this.item.nameColor = nameColor;
      this.itemService.updateItem(this.item.name, this.item).subscribe({error: _ => {
          this.adminItemService.toggleItemMenu();
        }});
    }
  }

  toggleItemMenu() {
    this.adminItemService.toggleItemMenu();
  }

}
