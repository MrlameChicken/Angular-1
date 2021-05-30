import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthService } from '../service/basic-auth.service';
import { HardAuthService } from '../service/hard-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private auth: HardAuthService, private basicAuth: BasicAuthService) { 
  }

  ngOnInit(): void {
  }
  username = ''
  password = ''
  success = false //login failed if this is true
  errorMessage = 'Invalid credentials'
  
  BasicAuthLogin(){
    this.basicAuth.executeBasicAuth(this.username,this.password).subscribe(  
      data =>{
        this.router.navigate([this.username,'welcome'])
        this.success = false
      },
      error => {
        console.log(error)
        this.success = true
      }
    )
  }
  
  login()
  {
    console.log(this.username+this.password)
    if(this.auth.authenticate(this.username,this.password))
    {
      this.router.navigate([this.username,'welcome'])
      this.success = false
    }
    else{
      this.success = true
    }
  //  if(this.username === "Tanmaya" && this.password==="hello123")
  //  {
  //    this.router.navigate(['welcome'])
  //     this.success = false
  //  }
  //  else{
  //    this.success = true
  //  }
  //   console.log(this.password+this.username);
  }

}
