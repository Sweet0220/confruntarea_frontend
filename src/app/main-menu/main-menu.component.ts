import { Component, OnInit } from '@angular/core';
import {AudioService} from "../../service/audio.service";
import {GameService} from "../../service/game.service";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  profileToggle: boolean = true;
  shopToggle: boolean = false;
  almanacToggle: boolean = false;
  helpToggle: boolean = false;
  aboutToggle: boolean = false;
  prepToggle: boolean = false;
  toBattleToggle: boolean = false;

  constructor(private audioService: AudioService, private gameService: GameService) { }

  ngOnInit(): void {
    this.audioService.song = "assets/audio/main_theme.mp3";
  }

  toggleProfileComponent(): void {
    this.profileToggle = true;
    this.shopToggle = false;
    this.almanacToggle = false;
    this.helpToggle = false;
    this.aboutToggle = false;
    this.prepToggle = false;
    this.toBattleToggle = false;
    this.audioService.song = "assets/audio/main_theme.mp3";
  }

  toggleShopComponent(): void {
    this.profileToggle = false;
    this.shopToggle = true;
    this.almanacToggle = false;
    this.helpToggle = false;
    this.aboutToggle = false;
    this.prepToggle = false;
    this.toBattleToggle = false;
    this.audioService.song = "assets/audio/main_theme.mp3";
  }

  toggleAlmanacComponent(): void {
    this.profileToggle = false;
    this.shopToggle = false;
    this.almanacToggle = true;
    this.helpToggle = false;
    this.aboutToggle = false;
    this.prepToggle = false;
    this.toBattleToggle = false;
    this.audioService.song = "assets/audio/main_theme.mp3";
  }

  toggleHelpComponent(): void {
    this.profileToggle = false;
    this.shopToggle = false;
    this.almanacToggle = false;
    this.helpToggle = true;
    this.aboutToggle = false;
    this.prepToggle = false;
    this.toBattleToggle = false;
    this.audioService.song = "assets/audio/main_theme.mp3";
  }

  toggleAboutComponent(): void {
    this.profileToggle = false;
    this.shopToggle = false;
    this.almanacToggle = false;
    this.helpToggle = false;
    this.aboutToggle = true;
    this.prepToggle = false;
    this.toBattleToggle = false;
    this.audioService.song = "assets/audio/main_theme.mp3";
  }

  togglePrepComponent(): void {
    this.profileToggle = false;
    this.shopToggle = false;
    this.almanacToggle = false;
    this.helpToggle = false;
    this.aboutToggle = false;
    this.prepToggle = true;
    this.toBattleToggle = false;
    this.audioService.song = "assets/audio/prep_theme.mp3";
  }

  toggleToBattleComponent(): void {
    this.profileToggle = false;
    this.shopToggle = false;
    this.almanacToggle = false;
    this.helpToggle = false;
    this.aboutToggle = false;
    this.prepToggle = false;
    this.toBattleToggle = true;
    this.audioService.song = "assets/audio/to_battle_theme.mp3";
  }

  get audio() {
    return this.audioService.audio;
  }

  get cover() {
    return this.gameService.cover;
  }

  get song() {
    return this.audioService.song;
  }

}
