import { Injectable } from '@angular/core';
import { users } from "../login/users.js"

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userExists = ({ user }): boolean => (user ? !!users[user] : false)
  public validate = ({ user, pass }): boolean => (user ? users[user]?.pass === pass : false)
  public isProfe = ({ user }): boolean => user ? users[user]?.type === "docente" : false
}
