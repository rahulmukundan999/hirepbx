import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../core/modules/shared.module';

import { RingComponent,RingDialog } from './ring.component';

const routes = [
    {
        path     : 'ring',
        component: RingComponent
    }
];

@NgModule({
    declarations: [
        RingComponent,
        RingDialog
    ],
    entryComponents: [RingComponent, RingDialog],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports     : [
        RingComponent,
        RingDialog
    ]
})

export class ringModule
{
}
