import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { encode } from 'js-base64';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {

  constructor(private http:HttpClient) { }

  executeBasicAuth(username: string, password:string) {
    let basicAuthHeader = "Basic "+encode(username+":"+password)
    let headers = new HttpHeaders({
      Authorization:basicAuthHeader
    })
    return this.http.get(`http://localhost:8080/basic-auth`,{headers}).pipe(
      map(
            data => {
              sessionStorage.setItem('user',username)
              sessionStorage.setItem('token',basicAuthHeader)
              return data;
            }
      )
    )
  }
  getAuthUser() {
    return sessionStorage.getItem('user')
      }

  getAuthToken() {
    if(this.getAuthUser())
      return sessionStorage.getItem('token')
    
  }
 

  
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
    sessionStorage.removeItem('token')
  }
}
