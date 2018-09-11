import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent} from './login.component';
import { FuseMainModule } from '../main/main.module';


const routes = [
    {
        path     : 'login',
        component: LoginComponent
    }
];

@NgModule({
    declarations: [
        LoginComponent
    ],
    entryComponents: [LoginComponent],
    imports     : [
        RouterModule.forChild(routes),
        FuseMainModule
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
