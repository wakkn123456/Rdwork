import { Component,OnInit } from '@angular/core';
import { element } from 'protractor';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  inputHint = '請輸入你要的文字';
  todos:Array<any>=[];
  todo = '';
  isCompleted=false;
  filterType='All';
  istoggleAll = false;
  apiUrl = 'http://localhost:3000/todos';

  constructor(private http:HttpClient){

  }

  ngOnInit(){
    this.http.get<any[]>(this.apiUrl)
        .subscribe(data =>{
          this.todos = data;
        });
  }

  onEnter = function(value){
    //console.info(value);
 //   this.todos.push(value);
    let newTodo ={
      text:this.todo,
      done:false
    }
    this.todos = this.todos.concat(newTodo);
    this.todo = '';

    this.http.post(this.apiUrl,newTodo)
        .subscribe(data=>{
          this.todos = this.todos.concat(data);
          this.todo = '';
        });
  };

  removeAll($event){
    this.todos.filter(item=>!item.done)
        .forEach(item =>{
          this.removeTodo(item);
        });
  };

  filterTypeChange($event){
    //console.log($event);
    this.filterType = $event;
  };
  toggleAllChange(){
    this.todos.forEach(item=>{
      item.done = this.istoggleAll;
      this.updateTodo(item);
    })
  };

  removeTodo(todo){
    this.http.delete(`${this.apiUrl}/${todo.id}`)
        .subscribe(data=>{
          this.todos = this.todos.filter(item => item !=todo);
        });
  }

  updateTodo(todo){
    this.http.put(`${this.apiUrl}/${todo.id}`,todo)
        .subscribe();
  }
