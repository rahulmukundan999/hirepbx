import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../core/modules/shared.module';

import { InboundComponent,InboundDialog } from './inbound.component';

const routes = [
    {
        path     : 'inbound',
        component: InboundComponent
    }
];

@NgModule({
    declarations: [
        InboundComponent,
        InboundDialog
    ],
    entryComponents: [ InboundComponent,InboundDialog],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports     : [
        InboundComponent,
        InboundDialog
    ]
})

export class inboundModule
{
}
