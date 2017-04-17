import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export class Message {
    time:string;
    type:string;
    title:string;
    detail:string;
    address:string;
    status:string;
    roleName:string;
    constructor(_time:string,
    _type:string,
    _title:string,
    _detail:string,
    _address:string,
    _status:string,
    _roleName:string){
        this.time=_time;
        this.type=_type;
        this.title=_title;
        this.detail=_detail;
        this.address=_address;
        this.status=_status;
        this.roleName=_roleName;
    }
}

@Component({
    selector: 'zui-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

    @Input()
    msgList:Array<Message> = new Array<Message>();

    @Output()
    msgClick:EventEmitter<Message> = new EventEmitter<Message>();

    isActive:boolean = false;

    constructor() {
    }

    ngOnInit() { }

    onClick(ev:Message){
        this.msgClick.emit(ev);
    }

}
