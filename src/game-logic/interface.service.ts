import { Injectable } from '@angular/core';
import {Item} from "../entity/item";

@Injectable({
  providedIn: 'root'
})
export class InterfaceService {

  mainInterface: boolean = true;
  attackInterface: boolean = false;
  abilityInterface: boolean = false;
  monsterTurnInterface: boolean = false;
  itemUseInterface: boolean = false;
  currentHp: number = 0;
  currentMana: number = 0;

  currentHpMonster: number = 0;

  ability:string = "";
  item: Item = {} as Item;

  win: boolean = false;
  lose: boolean = false;

  throw: boolean = false;
  drink: boolean = false;

  chosenItem: Item = {} as Item;

  monsterPicture: string = "";
  monsterHeight: string = "100";
  monsterBottom: string = "0";

  constructor() { }
}
