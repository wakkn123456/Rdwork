import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input("count") countdata;
  @Output() removeEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  remove(){
    this.removeEvent.emit(this.countdata);
  }

}
