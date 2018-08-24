import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm, FormArray, FormBuilder, } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../../../core/modules/shared.module';
import {CdkTableModule} from '@angular/cdk/table';
import { AccountComponent,DialogOverviewExampleDialog } from './account.component';
import { MatTableModule, MatSortModule } from '@angular/material';



const routes = [
    {
        path     : 'account',
        component: AccountComponent
    }
];

@NgModule({
    declarations: [
        AccountComponent,
        DialogOverviewExampleDialog
     
        
    ],
    entryComponents: [AccountComponent, DialogOverviewExampleDialog],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes),
        HttpModule,
        MatTableModule,
        MatSortModule,
    ],
    exports     : [
        CdkTableModule,
        AccountComponent,
        DialogOverviewExampleDialog
    ],
    bootstrap: [AccountComponent]
})

export class accountModule
{
}
