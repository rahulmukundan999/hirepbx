import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent} from './login.component';
import { FuseMainModule } from '../main/main.module';
import {FuseMainComponent} from '../main/main.component';
import {extensionModule} from '../main/content/extension/extension.module'


const routes = [
{
   path      : '',
        component: LoginComponent
},
{
    path:'main',
    component:FuseMainComponent
}
];

@NgModule({
    declarations: [
        LoginComponent
    ],
    entryComponents: [LoginComponent],
    imports     : [
        RouterModule.forChild(routes),
        FuseMainModule,extensionModule
    ],
    exports     : [
        LoginComponent
    ],
    bootstrap   : [
        LoginComponent
    ]
})

export class loginModule
{
}
