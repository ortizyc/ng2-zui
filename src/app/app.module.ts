import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicModule } from "ionic-angular";

import { AppComponent } from './app.component';
import { ZuiNg2Module } from "./exports/zui";

@NgModule({
    declarations: [
        AppComponent

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ZuiNg2Module,
        IonicModule.forRoot(AppComponent)
    ],
    providers: [],
    bootstrap: [IonicApp]
})
export class AppModule { }
