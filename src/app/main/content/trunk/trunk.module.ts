import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../core/modules/shared.module';

import { TrunkComponent,TrunkDialog } from './trunk.component';

const routes = [
    {
        path     : 'trunk',
        component: TrunkComponent
    }
];

@NgModule({
    declarations: [
        TrunkComponent,
        TrunkDialog
    ],
    entryComponents: [TrunkComponent, TrunkDialog],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports     : [
        TrunkComponent,
        TrunkDialog
    ]
})

export class trunkModule
{
}
