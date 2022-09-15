import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champions-help',
  templateUrl: './champions-help.component.html',
  styleUrls: ['./champions-help.component.css']
})
export class ChampionsHelpComponent implements OnInit {

  info: string = "Champions are the characters that you can play as in project_confruntarea. They are mighty heroes with interesting backstories that swore " +
    "to protect humanity."

  constructor() { }

  ngOnInit(): void {
  }

}
