import {User} from "../../entity/user";

export class Jwt {

  private _accessToken: string = "";
  private _refreshToken: string = "";
  private _principal: User = {} as User;

  constructor(accessToken: string, refreshToken: string, principal: User) {
    this._accessToken = accessToken;
    this._refreshToken = refreshToken;
    this._principal = principal;
  }


  get accessToken(): string {
    return this._accessToken;
  }

  set accessToken(value: string) {
    this._accessToken = value;
  }

  get refreshToken(): string {
    return this._refreshToken;
  }

  set refreshToken(value: string) {
    this._refreshToken = value;
  }

  get principal(): User {
    return this._principal;
  }

  set principal(value: User) {
    this._principal = value;
  }
}
