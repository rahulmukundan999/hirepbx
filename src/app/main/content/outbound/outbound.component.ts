import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSort,MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-outbound',
  templateUrl: './outbound.component.html',
  styleUrls: ['./outbound.component.scss']
})
export class OutboundComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  ngOnInit() {
   
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(OutboundDialog, {
      disableClose: false,
      width: '460px',
      height:'570px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');


     
    });
  }
 
}
export interface DialogData {
  animal: string;
  name: string;
} 

    @Component({
      selector: 'outbound-dialog',
      templateUrl: 'outbound.dialog.html'
    })
    export class OutboundDialog implements OnInit {
     
    
    
      constructor( public dialogRef: MatDialogRef<OutboundDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
        
    
      onNoClick(): void {
        this.dialogRef.close();
      }
     

    
      ngOnInit() {
 

                 }


}

