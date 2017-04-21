import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodePanelComponent } from "./code-panel/code-panel.component";
import { CodeTabsComponent } from './code-tabs/code-tabs.component';
import { CodeViewerComponent } from './code-viewer/code-viewer.component';

const DECL = [
    CodePanelComponent
]

@NgModule({
    declarations: [
        ...DECL,
        CodeTabsComponent,
        CodeViewerComponent
    ],
    imports: [ CommonModule ],
    exports: [
        ...DECL
     ],
    providers: []
})
export class ShowcaseModule {}
