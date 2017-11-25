import { Component,OnInit } from '@angular/core';
import { element } from 'protractor';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

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

  constructor(private dataSvc:DataService){

  }

  ngOnInit(){
    this.dataSvc.getTodos()
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

    //this.http.post(this.apiUrl,newTodo)
    this.dataSvc.addTodo(newTodo)
         .subscribe(data=>{
          this.todos = this.todos.concat(data);
          this.todo = '';
        });
  };

  removeAll(todo){
    this.dataSvc.removeTodo(todo)
    .subscribe(data => {
      this.todos = this.todos.filter(item => item !== todo);
    }, error => {
      // error handling
    }, () => {
      // completed
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
    this.dataSvc.removeTodo(todo)
    .subscribe(data => {
      this.todos = this.todos.filter(item => item !== todo);
    }, error => {
      // error handling
    }, () => {
      // completed
});
  }

  updateTodo(todo){
    this.dataSvc.updateTodo(todo)
    .subscribe();
  }
