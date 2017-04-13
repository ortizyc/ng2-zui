import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'zui-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
    time: string = '10-28 14:30';
    isActive = false;

    constructor() { }

    ngOnInit() { }


}
