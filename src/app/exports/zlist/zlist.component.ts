import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zlist',
  templateUrl: './zlist.component.html',
  styleUrls: ['./zlist.component.scss']
})
export class ZlistComponent implements OnInit {
  @Input()
  collection = [];
  @Input()
  clickable = false;
  
  constructor() { }

  ngOnInit() {
  }

}
