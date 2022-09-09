import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  cover: boolean = false;
  hit: boolean = false;
  monsterHit: boolean = false;

  monsterHitEffect: boolean = true;
  playerHitEffect: boolean = true;

  hasAttacked: boolean = false;
  hasUsedAbility: boolean = false;
  hasUsedItem: boolean = false;

  constructor() { }
}
