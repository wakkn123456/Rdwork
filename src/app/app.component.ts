import { Component } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  inputHint = '請輸入你要的文字';
  todos:Array<any>=[];
  todo = '';
  isCompleted=false;

  onEnter = function(value){
    //console.info(value);
 //   this.todos.push(value);
    let newTodo ={
      text:this.todo,
      done:false
    }
    this.todos.push(newTodo);
    this.todo = '';
    console.info(this.todos);
  };

  removeAll($event){
    $event.length = 0;
  }
}
