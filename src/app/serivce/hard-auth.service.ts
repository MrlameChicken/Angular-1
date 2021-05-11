import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardAuthService {

  constructor() { }

  authenticate(username,password){
    if(username==='Tanmaya' && password==='hello123'){
      sessionStorage.setItem('user',username)
      return true
    }
    else
    return false

    
  }
  isAuth() {
    let session = sessionStorage.getItem('user')
    return !(session===null)
  }
  logout(){
    sessionStorage.removeItem('user')
  }
}
