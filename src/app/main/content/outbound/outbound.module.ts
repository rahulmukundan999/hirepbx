import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../core/modules/shared.module';

import { OutboundComponent,OutboundDialog } from './Outbound.component';

const routes = [
    {
        path     : 'outbound',
        component: OutboundComponent
    }
];

@NgModule({
    declarations: [
        OutboundComponent,
        OutboundDialog
    ],
    entryComponents: [ OutboundComponent,OutboundDialog],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports     : [
        OutboundComponent,
        OutboundDialog
    ]
})

export class outboundModule
{
}
