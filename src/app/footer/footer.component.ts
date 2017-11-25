import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input("count") countdata;
  @Output() removeEvent = new EventEmitter<any>();

  @Output() filterTypeEvent = new EventEmitter<string>();

  filterType='All';

  constructor() { }

  ngOnInit() {
  }

  remove(){
    this.removeEvent.emit(this.countdata);
  }
  changeFilterType(filterType){
    this.filterType = filterType;
    this.filterTypeEvent.emit(filterType);
  }

}
