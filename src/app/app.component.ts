import { Component, OnInit,Inject,NgZone } from '@angular/core';
import { FuseSplashScreenService } from './core/services/splash-screen.service';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
    animal: string;
    name: string;
  }

@Component({
    selector   : 'fuse-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})

export class AppComponent implements OnInit
{

    playback:any;
    animal: string;
    name: string;
    password:string;
   dis : any;
   log = true;
   on()
   {
     if(this.name=="rahul" && this.password=="rahul")
     {
       this.dis = true;
       
     }
     else
     {
       this.dis = false;
       alert('Username Or Password Not Correct');
     }
   }
    
    constructor(
        private fuseSplashScreen: FuseSplashScreenService,
        private translate: TranslateService, private route: ActivatedRoute,
        private router: Router,public dialog: MatDialog,public ngZone:NgZone
    )
    {
        // Add languages
        this.translate.addLangs(['en', 'tr']);

        // Set the default language
        this.translate.setDefaultLang('en');

        // Use a language
        this.translate.use('en');
    }

ngOnInit()
{
  
  // this.router.navigate(['/extension']);
}


openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'dialog.html',
  })
  export class DialogOverviewExampleDialog {
  
    constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }
