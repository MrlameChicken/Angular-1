import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasicAuthService } from '../service/basic-auth.service';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../to-do-list/to-do-list.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(
    private route:Router,
    private todoService: TodoDataService,private router: ActivatedRoute,
    private basicAuth:BasicAuthService
    ) { }

  id:number
  todo:Todo
  //description:String
  //targetDate:Date
  username:String = this.basicAuth.getAuthUser()
  
  ngOnInit(): void {
    this.id = this.router.snapshot.params['id']
  //  this.username = this.router.snapshot.params['username']
    
    this.todo=new Todo(this.id,'','',new Date(),false)
    if(this.todo.id !=-1){
    this.todoService.getTodoById(this.username,this.id).subscribe(
       data =>{ 
         this.todo = data
      //  this.description = this.todo.description
      //  this.targetDate = this.todo.targetDate
        },
       error => this.handleError(error)
    )
      }
  }

  handleError(error){
   // this.errorToShow = error.error.message
    console.log(error.error.message)
  }
  saveTodo(){
    //create a new todo
    if(this.todo.id == -1)
    {
      this.createTodo()
    }
    //update an existing todo
    else{
    console.log(this.todo)
    this.todoService.updateTodo(this.username,this.id,this.todo).subscribe(
      data => {
        console.log(data)

       this.route.navigate(['todo'])        
      }
    )
    }
  }

  createTodo(){

    this.todoService.createTodo('Tanmya',this.todo).subscribe(
        data => {
          this.route.navigate(['todo'])
        }
    )

  }

  

}
