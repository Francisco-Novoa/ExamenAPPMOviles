import { Injectable } from '@angular/core';
import { users } from "./users.js"

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLogedIn = false
  public userExists = ({ user }): boolean => (user ? !!users[user] : false)
  public validate = ({ user, pass }): boolean => {
    this.isLogedIn = user ? users[user]?.pass === pass : false
    return this.isLogedIn
  }
  public isProfe = ({ user }): boolean => user ? users[user]?.type === "docente" : false
  public logout = () => this.isLogedIn = false
}
