import { Injectable,ElementRef } from '@angular/core';

@Injectable()
export class DocumentRef {
    constructor(){}

    get body():any{
        return document.body;
    }

    get documentElement():any{
        return document.documentElement;
    }
}


@Injectable()
export class WindowRef {
    constructor(private documentRef: DocumentRef){
    }
    get document():any{
        return this.documentRef;
    }
    get pageXOffset(){
        return window.pageXOffset;
    }
    get pageYOffset(){
        return window.pageYOffset;
    }
    get innerHeight(){
        return window.innerHeight;
    }
    get innerWidth(){
        return window.innerWidth;
    }
    getComputedStyle(element){
        return window.getComputedStyle(element);
    }
    getBoundingClientRect(elementRef:ElementRef){
        return elementRef.nativeElement && elementRef.nativeElement.getBoundingClientRect();
    }
}
