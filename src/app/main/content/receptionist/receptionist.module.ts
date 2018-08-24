import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../core/modules/shared.module';

import { ReceptionistComponent,ReceptionistDialog } from './receptionist.component';

const routes = [
    {
        path     : 'receptionist',
        component: ReceptionistComponent
    }
];

@NgModule({
    declarations: [
        ReceptionistComponent,
        ReceptionistDialog
    ],
    entryComponents: [ ReceptionistComponent,ReceptionistDialog],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports     : [
        ReceptionistComponent,
        ReceptionistDialog
    ]
})

export class receptionistModule
{
}
