import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zlist',
  templateUrl: './zlist.component.html',
  styleUrls: ['./zlist.component.scss']
})
export class ZlistComponent implements OnInit {
  @Input()
  collection = [
    {
      title: '80889080',
      subTitle: '南京支行',
      imgName: 'brand_Diebold.svg',
      introduction: '状态：已通知',
      content: '创建时间：07-28 19:55',
      click: (event) => {
        console.log(event)
      }
    }
  ];
  @Input()
  clickable = false;

  constructor() { }

  ngOnInit() {
  }

}
