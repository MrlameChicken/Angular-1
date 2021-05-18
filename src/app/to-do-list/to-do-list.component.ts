import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../serivce/data/todo-data.service';



export class Todo{
  constructor(
    public id: any,
    public username:String,
    public description:String,
    public date:Date,
    public isDone:Boolean
  ){}
}

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})

export class ToDoListComponent implements OnInit {

  constructor(private todoService:TodoDataService, private route: Router) {
   
   }
   todoList :Todo[]
   message = null
  //[
  //   {id:1,desc:"first"},
  //   {id:2,desc:"second"},
  //   {id:3,desc:"fourth"}
  // ]

  ngOnInit(): void {
    this.refreshToDos()
    
  }
  refreshToDos(){
      this.todoService.getAllTodos('Tanmaya').subscribe(
        response => {
          console.log(response)
          this.todoList = response
        }
      )  
  }
  deleteToDos(id){

    this.todoService.deleteTodoById('Tanmaya',id).subscribe(
      reponse => {
        this.refreshToDos()
        this.message = `Todo with id - ${id} is successful`
      }
    )

  } 

  updateToDos(id){
    console.log(id);
    this.route.navigate(['todo',id]);
  }

}
