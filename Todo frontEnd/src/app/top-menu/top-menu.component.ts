import { Component, OnInit } from '@angular/core';
import { HardAuthService } from '../service/hard-auth.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  constructor(public auth: HardAuthService) { }

  ngOnInit(): void {
  }

}
