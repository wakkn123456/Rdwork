import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  inputHint = '請輸入你要的文字';

  onEnter = function(value){
    var todos:string[];
    //console.info(value);
    todos.push(value);
    console.info(todos);
  }
}
