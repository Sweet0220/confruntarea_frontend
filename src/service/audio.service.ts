import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  audio: boolean = true;
  song: string = "";

  constructor() { }
}
