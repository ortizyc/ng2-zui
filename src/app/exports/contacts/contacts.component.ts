import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import * as pinyin from "pinyin";

export class Contact {
    constructor(public name: string, public phone: string) { }
}

@Component({
    selector: 'zui-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

    private _fmContact:Object = new Object();

    private _sideNav:Array<string> = ['A','B','C','D','E','F','G','H','I',
                        'J','K','L','M','N','O','P','Q','R',
                        'S','T','U','V','W','X','Y','Z','#'];

    @Input()
    contacts: Array<Contact> = new Array<Contact>();

    @Input()
    condition: string;

    @Output()
    contactClick: EventEmitter<Contact> = new EventEmitter<Contact>();

    constructor() {
        this.contacts=[new Contact("刘永超", "18894555322"),new Contact("蔡文卓", "18894555322"),new Contact("安琪", "18894555322"),new Contact("陈敏", "18894555322"),new Contact("梁占永", "18894555322"),new Contact("刘永超", "18894555322"),new Contact("蔡文卓", "18894555322"),new Contact("安琪", "18894555322"),new Contact("陈敏", "18894555322"),new Contact("梁占永", "18894555322"),new Contact("刘永超", "18894555322"),new Contact("蔡文卓", "18894555322"),new Contact("安琪", "18894555322"),new Contact("陈敏", "18894555322"),new Contact("梁占永", "18894555322")];
    }

    ngOnInit() {
        for (let k in this.contacts) {
            let pinyinOfNameString:string='';
            let pinyinOfNameArray:Array<Array<string>> = pinyin(this.contacts[k].name, {
                style: pinyin.STYLE_FIRST_LETTER, // 设置拼音风格
                heteronym: true
            });
            let bigLetter = pinyinOfNameArray[0][0].toUpperCase();
            console.log(bigLetter);
            if(this._sideNav.indexOf(bigLetter)===-1){
                bigLetter = '#';
            }
            if(!this._fmContact[bigLetter]){
                this._fmContact[bigLetter] = new Array<Contact>();
            }
            this._fmContact[bigLetter].push(this.contacts[k]);
        }
        console.log(this.contacts,this._fmContact);
    }

    existInContacts(){
        let keyArray = Object.keys(this._fmContact).sort();
        if(keyArray.indexOf('#')===0){
            keyArray.shift();
            keyArray.push('#');
        }
        return keyArray;
    }

    scollto(event){
        console.log(event)
    }
}
