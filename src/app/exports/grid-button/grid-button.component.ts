import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export class GridButton {
    icon:string;
    name:string;
}

@Component({
    selector: 'zui-grid-button',
    templateUrl: './grid-button.component.html',
    styleUrls: ['./grid-button.component.scss']
})
export class GridButtonComponent implements OnInit {

    @Input()
    btns:Array<GridButton> = new Array<GridButton>();

    @Output()
    btnEvent:EventEmitter<GridButton> = new EventEmitter<GridButton>();

    constructor() { }

    ngOnInit() {
    }

    btnClick(btn:GridButton){
        this.btnEvent.next(btn);
    }
}
