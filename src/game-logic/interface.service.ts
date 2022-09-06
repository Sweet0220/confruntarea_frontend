import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterfaceService {

  mainInterface: boolean = true;
  currentHp: number = 0;
  currentMana: number = 0;

  constructor() { }
}
