import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monsters-help',
  templateUrl: './monsters-help.component.html',
  styleUrls: ['./monsters-help.component.css']
})
export class MonstersHelpComponent implements OnInit {

  info: string = "Monsters are the enemies that you face in project_confruntarea battles. They are creatures from other worlds summoned with Pandora's Box. " +
    "The monsters you face have different levels and powers. When defeated, they drop orbs and your experience increases, allowing you to level up. If monsters " +
    "manage to defeat you, you lose some experience and you can even lose your level. You can check the ALMANAC page to view more information about each monster " +
    "and prepare for a fight.";

  constructor() { }

  ngOnInit(): void {
  }

}
