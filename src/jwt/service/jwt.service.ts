import { Injectable } from '@angular/core';
import {User} from "../../entity/user";

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  accessToken: string = "";
  refreshToken: string = "";
  principal: User = {} as User;

  constructor() { }

}
