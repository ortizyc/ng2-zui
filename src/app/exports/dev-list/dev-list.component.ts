import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dev-list',
  templateUrl: './dev-list.component.html',
  styleUrls: ['./dev-list.component.scss']
})
export class DevListComponent implements OnInit {
  devList = [];
  @Input()
  set devices(param) {
    if(!param){
      this.devList = [];
      return;
    }
    this.devList = param;
  }
  @Output()
  itemClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  openDetail(device) {
    this.itemClick.emit(device);
  }
}
