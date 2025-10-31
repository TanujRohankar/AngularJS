import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {
  status:boolean=false;

  validate(user: string, password: string): boolean {
     
      return false;
     
 }

 logout(): any {   }
 getUser(): any {   }
 isLoggedIn(user:string, password:string): boolean {   
  if(user === "tanuj.rohankar@transflower.in" && password === "seed")
  {
    return true;
  }
  return false;  }
}