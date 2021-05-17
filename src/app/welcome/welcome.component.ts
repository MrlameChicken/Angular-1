import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeDataService } from '../serivce/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router, private hellobean:WelcomeDataService) { }
  
  //variable declarations
  responseToPrint: String
  errorToShow:String
  username:String

  ngOnInit(): void {
  }
  welcome()
  {
    this.router.navigate(['todo'])
  }
  hello()
  {
    this.hellobean.excuteHelloService().subscribe(
      response => this.handleResponse(response),
      error => this.handleError(error)
    );
  }
  customHello(){
    this.hellobean.excuteCustomHelloService(this.username).subscribe(
      response => this.handleResponse(response),
      error => this.handleError(error)
    );
  }
  handleResponse(Response){
    this.responseToPrint = Response.message
    console.log(Response)

  }
  handleError(error){
    this.errorToShow = error.error.message
    console.log(error.error.message)
  }
}
