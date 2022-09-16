import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranks-help',
  templateUrl: './ranks-help.component.html',
  styleUrls: ['./ranks-help.component.css']
})
export class RanksHelpComponent implements OnInit {

  info: string = "Ranks are gained by leveling up. They show which category of warriors you fit into. There are currently 15 ranks in project_confruntarea."

  constructor() { }

  ngOnInit(): void {
  }

}
