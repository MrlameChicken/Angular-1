import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/to-do-list/to-do-list.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  public getAllTodos(username:String){
  
    return this.http.get<Todo []>(`http://localhost:8080/users/${username}/todos`)

  }

  public getTodoById(username:String,id:number){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  public deleteTodoById(username:String,id:Number){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  public updateTodo(username:String,id:number,todo:Todo){
    return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`,todo)
  }

  public createTodo(username:String,todo:Todo){
    return this.http.post(`http://localhost:8080/users/${username}/todos`,todo)
  }
}
