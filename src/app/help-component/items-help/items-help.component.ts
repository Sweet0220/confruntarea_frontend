import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-help',
  templateUrl: './items-help.component.html',
  styleUrls: ['./items-help.component.css']
})
export class ItemsHelpComponent implements OnInit {

  info: string = "There are 4 types of items you can buy in project_confruntarea. Weapons greatly improve your champion's damage and can add lifesteal to your attack, " +
    "meaning that when you attack, you steal some of your enemies' HP and add it to your own. Armor can increase your total HP and some armor can add thorns stats to your " +
    "champion. This means that when you get hit, the enemy also gets some damage. Potions can regenerate your health and mana, and throwables are items that you throw " +
    "at your enemies to deal damage and maybe even lifesteal.";

  constructor() { }

  ngOnInit(): void {
  }

}
