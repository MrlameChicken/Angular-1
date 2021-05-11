import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  constructor() { }
  todo = [
    {id:1,desc:"first"},
    {id:2,desc:"second"},
    {id:3,desc:"fourth"}
  ]

  ngOnInit(): void {
  }

}
