import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app works!';
    percent = 0.8;
    constructor(){
        // setInterval(()=>this.percent+=0.05,1000);
    }
}
