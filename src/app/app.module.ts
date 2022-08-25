import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ProfileComponent } from './profile/profile.component';
import { ShopComponent } from './shop/shop.component';
import { ShopChampionsComponent } from './shop-champions/shop-champions.component';
import { ShopWeaponsComponent } from './shop-weapons/shop-weapons.component';
import { ShopArmourComponent } from './shop-armour/shop-armour.component';
import { ShopThrowablesComponent } from './shop-throwables/shop-throwables.component';
import { ShopPotionsComponent } from './shop-potions/shop-potions.component';
import { AppRoutingModule } from './app-routing.module';
import { AlmanacComponent } from './almanac/almanac.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminUserMenuComponent } from './admin-users/admin-user-menu/admin-user-menu.component';
import { AdminUserViewComponent } from './admin-users/admin-user-view/admin-user-view.component';
import { AdminChampionsComponent } from './admin-menu/admin-champions/admin-champions.component';
import { AdminChampionMenuComponent } from './admin-menu/admin-champions/admin-champion-menu/admin-champion-menu.component';
import { AdminChampionAddComponent } from './admin-menu/admin-champions/admin-champion-add/admin-champion-add.component';
import { AdminChampionViewComponent } from './admin-menu/admin-champions/admin-champion-view/admin-champion-view.component';
import { AdminItemsComponent } from './admin-menu/admin-items/admin-items.component';
import { AdminItemMenuComponent } from './admin-menu/admin-items/admin-item-menu/admin-item-menu.component';
import { AdminItemAddComponent } from './admin-menu/admin-items/admin-item-add/admin-item-add.component';
import { AdminItemViewComponent } from './admin-menu/admin-items/admin-item-view/admin-item-view.component';
import { AdminAbilitiesComponent } from './admin-menu/admin-abilities/admin-abilities.component';
import { AdminAbilityMenuComponent } from './admin-menu/admin-abilities/admin-ability-menu/admin-ability-menu.component';
import { AdminAbilityAddComponent } from './admin-menu/admin-abilities/admin-ability-add/admin-ability-add.component';
import { AdminAbilityViewComponent } from './admin-menu/admin-abilities/admin-ability-view/admin-ability-view.component';
import { AdminMonstersComponent } from './admin-menu/admin-monsters/admin-monsters.component';
import { AdminMonsterMenuComponent } from './admin-menu/admin-monsters/admin-monster-menu/admin-monster-menu.component';
import { AdminMonsterAddComponent } from './admin-menu/admin-monsters/admin-monster-add/admin-monster-add.component';
import { AdminMonsterViewComponent } from './admin-menu/admin-monsters/admin-monster-view/admin-monster-view.component';
import { RegisterComponent } from './register/register.component';
import { ChampionPreviewComponent } from './shop-champions/champion-preview/champion-preview.component';
import { ForgotUsernameComponent } from './login/forgot-username/forgot-username.component';
import { ItemPreviewComponent } from './shop/item-preview/item-preview.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { ResetFormComponent } from './login/forgot-password/reset-form/reset-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainMenuComponent,
    ProfileComponent,
    ShopComponent,
    ShopChampionsComponent,
    ShopWeaponsComponent,
    ShopArmourComponent,
    ShopThrowablesComponent,
    ShopPotionsComponent,
    AlmanacComponent,
    AdminMenuComponent,
    AdminUsersComponent,
    AdminUserMenuComponent,
    AdminUserViewComponent,
    AdminChampionsComponent,
    AdminChampionMenuComponent,
    AdminChampionAddComponent,
    AdminChampionViewComponent,
    AdminItemsComponent,
    AdminItemMenuComponent,
    AdminItemAddComponent,
    AdminItemViewComponent,
    AdminAbilitiesComponent,
    AdminAbilityMenuComponent,
    AdminAbilityAddComponent,
    AdminAbilityViewComponent,
    AdminMonstersComponent,
    AdminMonsterMenuComponent,
    AdminMonsterAddComponent,
    AdminMonsterViewComponent,
    RegisterComponent,
    ChampionPreviewComponent,
    ForgotUsernameComponent,
    ItemPreviewComponent,
    ForgotPasswordComponent,
    ResetFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
