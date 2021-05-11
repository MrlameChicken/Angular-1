import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardAuthService } from '../serivce/hard-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private auth: HardAuthService) { 
  }

  ngOnInit(): void {
  }
  username = ''
  password = ''
  success = false
  errorMessage = 'Invalid credentials'
  login()
  {
    console.log(this.username+this.password)
    if(this.auth.authenticate(this.username,this.password))
    {
      this.router.navigate(['welcome'])
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
