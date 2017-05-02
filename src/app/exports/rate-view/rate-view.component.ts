import { Component, OnInit, Input } from '@angular/core';

import { WindowRef } from "../util/ref";

@Component({
    selector: 'zui-rate-view',
    templateUrl: './rate-view.component.html',
    styleUrls: ['./rate-view.component.scss']
})
export class RateViewComponent implements OnInit {

    private _height:number;
    private _width:number;

    @Input()
    set height(h:number){
        this._height=h;
    }

    @Input()
    set width(w:number){
        this._width = w;
    }

    constructor(private _win:WindowRef) {
        this._height = (this._height||this._win.innerHeight) * 0.4;
        this._width = this._width||this._win.innerWidth;

    }

    ngOnInit() {}

}
