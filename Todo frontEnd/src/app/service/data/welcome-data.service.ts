import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


export class ResponseObject {
  constructor(public message: string)
    {
      
    }
}

@Injectable({
  providedIn: 'root'
})



export class WelcomeDataService {
 

  constructor(
    private http:HttpClient
    ) { }

  excuteHelloService(){
    return this.http.get<ResponseObject>("http://localhost:8080/hello-world-bean")
    //console.log("Service is executed")
  }
  excuteCustomHelloService(username: String) {
    return this.http.get(`http://localhost:8080/hello-world-bean/${username}`)
  }
}
