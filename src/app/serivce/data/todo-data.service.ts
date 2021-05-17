import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { todo } from 'src/app/to-do-list/to-do-list.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  public getAllTodos(username:String){
  
    return this.http.get<todo []>(`http://localhost:8080/users/${username}/todos`)

  }

  public deleteTodoById(username:String,id:Number){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }
}
