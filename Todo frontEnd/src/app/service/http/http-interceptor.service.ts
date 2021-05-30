import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { encode } from 'js-base64';
import { BasicAuthService } from '../basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private basicAuth: BasicAuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    // let user = "Tanmaya.Webservice"
    // let password = "yjes231!"
    let basicAuthHeader = this.basicAuth.getAuthToken()
   // let basicAuthHeader = "Basic VGFubWF5YS5XZWJzZXJ2aWNlOnlqZXMyMzEh"
    if(basicAuthHeader){
    req = req.clone({
      setHeaders: {
        Authorization: basicAuthHeader
      }
    })
  }
    return next.handle(req)
  }

}
