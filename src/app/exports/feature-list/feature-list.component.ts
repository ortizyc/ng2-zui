import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.scss']
})
export class FeatureListComponent implements OnInit {
  @Input()
  content = [{label: '功能名称', note: '功能描述'}];
  @Output()
  itemClick = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  clickHandler(item) {
    this.itemClick.emit(item);
  }
}
