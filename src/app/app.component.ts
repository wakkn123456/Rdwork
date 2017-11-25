import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  inputHint = '請輸入你要的文字';
  todo = '';

  onEnter = function(value){
    let todos:Array<string>=[];
    //console.info(value);
    todos.push(value);
    todos.push(this.todo);
    this.todo = '';
    console.info(todos);
  }
}
