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
    msgList:Array<Message> = [new Message(
                "10-28 14:30",
                "网络",
                "80889080(鼓楼·网络故障)",
                "CASE:9144,网络通讯（NET00408920)",
                "鼓楼区北京西路359号雨润大厦",
                "处理中",
                "吴青峰"
            )];

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
