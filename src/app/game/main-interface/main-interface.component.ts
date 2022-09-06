import { Component, OnInit } from '@angular/core';
import {InterfaceService} from "../../../game-logic/interface.service";
import {GameEntity} from "../../../game-logic/game-entity";

@Component({
  selector: 'app-main-interface',
  templateUrl: './main-interface.component.html',
  styleUrls: ['./main-interface.component.css']
})
export class MainInterfaceComponent implements OnInit {

  gameEntity: GameEntity = {} as GameEntity;

  constructor(private interfaceService: InterfaceService) { }

  ngOnInit(): void {
    this.gameEntity = JSON.parse(<any>localStorage.getItem("game_entity"));
    this.interfaceService.currentHp = this.gameEntity.totalHp;
    this.interfaceService.currentMana = this.gameEntity.totalMana;
  }

  get currentHp() {
    return this.interfaceService.currentHp;
  }

  get currentMana() {
    return this.interfaceService.currentMana;
  }

}
