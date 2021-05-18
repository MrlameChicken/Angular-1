import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoDataService } from '../serivce/data/todo-data.service';
import { Todo } from '../to-do-list/to-do-list.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoService: TodoDataService,private router: ActivatedRoute) { }

  id:number
   todo:Todo
description:String
  ngOnInit(): void {
    this.id = this.router.snapshot.params['id']
    this.todoService.getTodoById('Tanmaya',this.id).subscribe(
       data =>{ 
         this.todo = data
       this.description = this.todo.description
        },
       error => this.handleError(error)
    )
  }

  handleError(error){
   // this.errorToShow = error.error.message
    console.log(error.error.message)
  }

  

}
