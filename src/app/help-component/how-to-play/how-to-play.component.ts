import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-to-play',
  templateUrl: './how-to-play.component.html',
  styleUrls: ['./how-to-play.component.css']
})
export class HowToPlayComponent implements OnInit {

  info: string = "project_confruntarea is a turn based game. That means that you can only do a certain amount of things per turn. When you end your turn, the monster will attack," +
    " as it is his turn, and so on. Every round, you can use one ATTACK, one ABILITY and one ITEM from your inventory. After every turn, your champion regenerates 25 mana that you" +
    " can use for abilities."

  constructor() { }

  ngOnInit(): void {
  }

}
