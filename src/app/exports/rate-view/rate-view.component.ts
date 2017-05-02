import { Component, OnInit } from '@angular/core';

import { WindowRef } from "../util/ref";

@Component({
    selector: 'zui-rate-view',
    templateUrl: './rate-view.component.html',
    styleUrls: ['./rate-view.component.scss']
})
export class RateViewComponent implements OnInit {

    private _height:number;
    private _width:number;

    constructor(private _win:WindowRef) { }

    ngOnInit() {
        this._height = this._win.innerHeight * 0.4;
        this._width = this._win.innerWidth;
    }

}
