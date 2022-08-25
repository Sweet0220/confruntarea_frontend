export class User {

  username: string;
  password: string;
  email: string;
  funds: number;
  level: number;
  exp: number;
  picture: string;
  role: string;

  constructor(username: string, password: string, email: string, funds: number, level: number, exp: number, picture: string, role: string) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.funds = funds;
    this.level = level;
    this.exp = exp;
    this.picture = picture;
    this.role = role;
  }

}
