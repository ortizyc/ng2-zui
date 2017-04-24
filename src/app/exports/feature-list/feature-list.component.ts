import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.scss']
})
export class FeatureListComponent implements OnInit {
  @Input()
  content = [];
  
  constructor() { }

  ngOnInit() {
  }

}
