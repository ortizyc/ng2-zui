import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export class GridButton {
    icon:string;
    name:string;
    payload?:object;
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
    btnClick:EventEmitter<GridButton> = new EventEmitter<GridButton>();

    constructor() { }

    ngOnInit() {
    }

    click(btn:GridButton){
        this.btnClick.next(btn);
    }
}
