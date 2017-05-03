import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export class GridButton {
    icon: string;
    name: string;
    payload?: Object;
}

@Component({
    selector: 'zui-grid-button',
    templateUrl: './grid-button.component.html',
    styleUrls: ['./grid-button.component.scss']
})
export class GridButtonComponent implements OnInit {

    btnss: Array<Array<GridButton>> = new Array<Array<GridButton>>();

    @Input()
    set btns(param:Array<GridButton>) {
        let element: Array<GridButton> = new Array<GridButton>();
        for(let i = 0; i < param.length; i++) {
            element.push(param[i]);
            if(element.length == 3 || i == param.length-1){
                this.btnss.push(element);
                element = new Array<GridButton>();
            }
        }
    }

    @Output()
    btnClick: EventEmitter<GridButton> = new EventEmitter<GridButton>();

    constructor() {
        this.btnss = [[{
            icon: "./assets/images/icon_冠字号.png",
            name: "冠字号"
        }, {
            icon: "./assets/images/icon_大数据.png",
            name: "大数据"
        }, {
            icon: "./assets/images/icon_加钞规划.png",
            name: "大数据"
        }]]
    }

    ngOnInit() {
    }

    onClick(btn: GridButton) {
        this.btnClick.next(btn);
    }
}
