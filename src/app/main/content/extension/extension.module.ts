import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../core/modules/shared.module';

import { ExtensionComponent,ExtensionDialog } from './extension.component';

const routes = [
    {
        path     : 'extension',
        component: ExtensionComponent
    }
];

@NgModule({
    declarations: [
        ExtensionComponent,
        ExtensionDialog
    ],
    entryComponents: [ExtensionComponent, ExtensionDialog],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports     : [
        ExtensionComponent,
        ExtensionDialog
    ]
})

export class extensionModule
{
}
