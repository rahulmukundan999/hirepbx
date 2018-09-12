import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import { SharedModule } from './core/modules/shared.module';
import { AppComponent } from './app.component';
import { FuseMainModule } from './main/main.module';
import {FuseMainComponent} from './main/main.component'
import { loginModule} from './login/login.module';
import { FuseSplashScreenService } from './core/services/splash-screen.service';
import { FuseConfigService } from './core/services/config.service';
import { FuseNavigationService } from './core/components/navigation/navigation.service';
import { FuseSampleModule } from './main/content/sample/sample.module';
import { accountModule } from './main/content/account/account.module';
import { extensionModule } from './main/content/extension/extension.module';
import { trunkModule } from './main/content/trunk/trunk.module';
import { inboundModule } from './main/content/inbound/inbound.module';
import { outboundModule } from './main/content/outbound/outbound.module';
import { ringModule } from './main/content/ring/ring.module';
import { receptionistModule } from './main/content/receptionist/receptionist.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { DialogOverviewExampleDialog } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './main/content/account/account.component';

const appRoutes: Routes = [
 
    {
        path      : '**',
        redirectTo: 'sample'
    },
   
    {
        path      : 'account',
        redirectTo: 'account'
    },
    {
        path      : 'extension',
        redirectTo: 'extension'
    },
    {
        path      : 'trunk',
        redirectTo: 'trunk'
    },
    {
        path      : 'inbound',
        redirectTo: 'inbound'
    },
    {
        path      : 'Outbound',
        redirectTo: 'Outbound'
    },
    {
        path      : 'Ring',
        redirectTo: 'Ring'
    },
    {
        path      : 'Receptionist',
        redirectTo: 'Receptionist'
    }
];

@NgModule({
    declarations: [
        AppComponent, DialogOverviewExampleDialog
    ], entryComponents: [AppComponent, DialogOverviewExampleDialog],
    imports     : [
        BrowserModule,
        HttpModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),
        SharedModule,
        TranslateModule.forRoot(),
        FuseMainModule,
        FuseSampleModule,
        accountModule,
        extensionModule,
        trunkModule,
        inboundModule,
        outboundModule,
        ringModule,
        receptionistModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        loginModule
       
    ],
    providers   : [
        FuseSplashScreenService,
        FuseConfigService,
        FuseNavigationService
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
