import { Component, OnInit } from '@angular/core';
import {GameEntity} from "../../game-logic/game-entity";
import {GameService} from "../../service/game.service";
import {AudioService} from "../../service/audio.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  hasLoadout: boolean = false;
  gameEntity: GameEntity = {} as GameEntity;

  constructor(private gameService: GameService, private audioService: AudioService) { }

  ngOnInit(): void {
    let jsonString = localStorage.getItem("game_entity");
    if(jsonString != "") {
      this.gameEntity = JSON.parse(<any>localStorage.getItem("game_entity"));
      if(Object.keys(this.gameEntity.champion).length != 0) {
        console.log(this.gameEntity.champion);
        this.hasLoadout = true;
    }
    }
  }

  toggleFight() {
    this.gameService.cover = !this.gameService.cover;
    this.audioService.song = "assets/audio/fight_theme.mp3";
  }

}
