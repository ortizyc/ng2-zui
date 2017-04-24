import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from "ionic-angular";
import { EchartsNg2Module } from "echarts-ng2";

import { MessageComponent } from "./message/message.component";
import { CircleRateComponent } from "./circle-rate/circle-rate.component";
import { GridButtonComponent } from './grid-button/grid-button.component';
import { TimeAxisComponent } from './time-axis/time-axis.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ZavatarComponent } from './zavatar/zavatar.component';

const CUSTOM_COMPONENT = [
    MessageComponent,
    CircleRateComponent,
    GridButtonComponent,
    TimeAxisComponent,
    ContactsComponent,
    ZavatarComponent
]

@NgModule({
    declarations: [
        ...CUSTOM_COMPONENT,
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
