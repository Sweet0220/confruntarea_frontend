import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-component',
  templateUrl: './help-component.component.html',
  styleUrls: ['./help-component.component.css']
})
export class HelpComponentComponent implements OnInit {

  orbs: boolean = true;
  champions: boolean = false;
  items: boolean = false;
  monsters: boolean = false;
  ranks: boolean = false;
  howToPlay: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleOrbs() {
    this.orbs = true;
    this.champions = false;
    this.items = false;
    this.monsters = false;
    this.ranks = false;
    this.howToPlay = false;
  }

  toggleChampions() {
    this.orbs = false;
    this.champions = true;
    this.items = false;
    this.monsters = false;
    this.ranks = false;
    this.howToPlay = false;
  }

  toggleItems() {
    this.orbs = false;
    this.champions = false;
    this.items = true;
    this.monsters = false;
    this.ranks = false;
    this.howToPlay = false;
  }

  toggleMonsters() {
    this.orbs = false;
    this.champions = false;
    this.items = false;
    this.monsters = true;
    this.ranks = false;
    this.howToPlay = false;
  }

  toggleRanks() {
    this.orbs = false;
    this.champions = false;
    this.items = false;
    this.monsters = false;
    this.ranks = true;
    this.howToPlay = false;
  }

  toggleHowToPlay() {
    this.orbs = false;
    this.champions = false;
    this.items = false;
    this.monsters = false;
    this.ranks = false;
    this.howToPlay = true;
  }

}
