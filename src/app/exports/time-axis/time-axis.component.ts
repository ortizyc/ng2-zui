import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export class TimeAxis {
    name: string;
    description: string;
    time: string;
    constructor(_name:string,_time:string,_description?:string){
        this.name=_name;
        this.description=_description;
        this.time=_time;
    }
}

@Component({
    selector: 'zui-time-axis',
    templateUrl: './time-axis.component.html',
    styleUrls: ['./time-axis.component.scss']
})
export class TimeAxisComponent implements OnInit {

    @Input()
    timeaxis:Array<TimeAxis> = new Array<TimeAxis>();

    @Output()
    txClick:EventEmitter<TimeAxis> = new EventEmitter<TimeAxis>();

    constructor() { }

    ngOnInit() {
    }

    onClick(ta:TimeAxis){
        this.txClick.emit(ta);
    }

}
