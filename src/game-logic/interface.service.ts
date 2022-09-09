import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterfaceService {

  mainInterface: boolean = true;
  attackInterface: boolean = false;
  abilityInterface: boolean = false;
  monsterTurnInterface: boolean = false;
  currentHp: number = 0;
  currentMana: number = 0;

  currentHpMonster: number = 0;

  ability:string = "";

  win: boolean = false;
  lose: boolean = false;

  constructor() { }
}
