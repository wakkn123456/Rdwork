import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  inputHint = '請輸入你要的文字';
  todos:Array<string>=[];
  todo = '';

  onEnter = function(value){
    //console.info(value);
    this.todos.push(value);
    this.todos.push(this.todo);
    this.todo = '';
    console.info(this.todos);
  }
}
