import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'select-bar',
  templateUrl: './select-bar.component.html',
  styleUrls: ['./select-bar.component.scss']
})
export class SelectBarComponent implements OnInit {

  @Input()
  dataList = [];
  @Output()
  select = new EventEmitter();

  selectedItem;
  constructor() { }

  selected(name, value) {
    this.selectedItem = name;
    this.select.emit({name: name, value: value});
  }
  ngOnInit() {
  }

}
