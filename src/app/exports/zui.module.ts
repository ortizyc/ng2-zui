import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from "ionic-angular";
import { EchartsNg2Module } from "echarts-ng2";

import { MessageComponent } from "./message/message.component";
import { OpenRateComponent } from "./open-rate/open-rate.component";

const CUSTOM_COMPONENT = [
    MessageComponent,
    OpenRateComponent
]

@NgModule({
    declarations: [
        ...CUSTOM_COMPONENT
    ],
    imports: [
        CommonModule,
        IonicModule,
        EchartsNg2Module
    ],
    providers: [],
    exports: [
        ...CUSTOM_COMPONENT
    ]
})
export class ZuiNg2Module {
    static forRoot():ModuleWithProviders{
        return {
            ngModule:ZuiNg2Module,
            providers:[
            ]
        }
    }
}
