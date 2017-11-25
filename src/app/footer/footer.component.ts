import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input("count") countdata;
  @Output() countEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

}
