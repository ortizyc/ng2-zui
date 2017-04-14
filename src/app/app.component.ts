import { Component } from '@angular/core';
import { TimeAxis } from "./exports/zui";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app works!';
    percent = 0.8;

    tas = [new TimeAxis('故障处理完成','2016-10-28 14:32:00'),new TimeAxis('设备网络恢复正常','2016-10-28 14:32:00','ATM设备监控恢复')]

    btns = [{
        icon:"./assets/images/icon_冠字号.png",
        name:"冠字号"
    },{
        icon:"./assets/images/icon_大数据.png",
        name:"大数据"
    }]
    constructor(){
        // setInterval(()=>this.percent+=0.05,1000);
    }

    gotoPage(event){
        console.log(event);
    }
}
