import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  api = 'http://localhost:3000/todos';
  constructor(private http: HttpClient) { }

  getTodos(){
    return this.http.get<any[]>(this.api);
  }

  addTodo(newTodo){
    return this.http.post(this.api,newTodo);
  }

  removeTodo(todo){
    return this.http.delete(`${this.api}/${todo.id}`);
  }
  updateTodo(todo){
    return this.http.put(`${this.api}/${todo.id}`,todo);
  }
}
