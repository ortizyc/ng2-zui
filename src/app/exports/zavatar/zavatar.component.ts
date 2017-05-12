import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'zui-avatar',
    templateUrl: './zavatar.component.html',
    styleUrls: ['./zavatar.component.scss']
})
export class ZavatarComponent implements OnInit {

    @Input()
    src:string;

    @Output()
    loginClick:EventEmitter<any> = new EventEmitter<any>();

    @Output()
    registerClick:EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {
    }

    onLoginClick(){
        this.loginClick.emit('Login');
    }

    onRegisterClick(){
        this.registerClick.emit('Register');
    }
}
