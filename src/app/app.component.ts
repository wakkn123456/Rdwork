import { Component } from '@angular/core';
import { element } from 'protractor';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

  constructor (http: HttpClient) {

  }
})
export class AppComponent {
  title = 'app';
  inputHint = '請輸入你要的文字';
  todos:Array<any>=[];
  todo = '';
  isCompleted=false;
  filterType='All';
  istoggleAll = false;
  onEnter = function(value){
    //console.info(value);
 //   this.todos.push(value);
    let newTodo ={
      text:this.todo,
      done:false
    }
    this.todos = this.todos.concat(newTodo);
    this.todo = '';
    console.info(this.todos);
  };

  removeAll($event){
    this.todos = this.todos.filter((item)=>{
      console.info(item.done);
      return item.done != true;
    })
  };
  filterTypeChange($event){
    //console.log($event);
    this.filterType = $event;
  };
  toggleAllChange(){
    this.todos.forEach(item=>{
      item.done = this.istoggleAll;
    })
  };
  removeTodo(todo){
    this.todos = this.todos.filter((item)=>{
      return item !== todo;
    })
  }
}
