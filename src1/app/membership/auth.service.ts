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
  const storeData =  sessionStorage.getItem('customerData');
  if(storeData) 
  {
  const userData = JSON.parse(storeData);
  if(user === userData.email && password === "seed")
  {
    return true;
  }
  return false;  }
  return false;
}

}