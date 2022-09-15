import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orbs-help',
  templateUrl: './orbs-help.component.html',
  styleUrls: ['./orbs-help.component.css']
})
export class OrbsHelpComponent implements OnInit {

  info: string = "Orbs are spirits dropped by entities upon their death. They are used as the main currency in project_confruntarea. " +
    "Use orbs in the shop to buy the different available champions, gear like swords, guns, armor and potions or throwable items to deal extra damage. " +
    "To earn orbs, you must defeat monsters in battle. Depending on their level, they will reward you different amounts of orbs and experience upon their death."

  constructor() { }

  ngOnInit(): void {
  }

}
