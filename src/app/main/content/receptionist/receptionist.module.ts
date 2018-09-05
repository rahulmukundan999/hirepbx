import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../core/modules/shared.module';

import { ReceptionistComponent,ReceptionistDialog,WavDialog } from './receptionist.component';

const routes = [
    {
        path     : 'receptionist',
        component: ReceptionistComponent
    }
];

@NgModule({
    declarations: [
        ReceptionistComponent,
        ReceptionistDialog,
        WavDialog
    ],
    entryComponents: [ ReceptionistComponent,ReceptionistDialog,WavDialog],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports     : [
        ReceptionistComponent,
        ReceptionistDialog,
        WavDialog
    ]
})

export class receptionistModule
{
}
