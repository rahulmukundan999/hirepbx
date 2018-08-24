import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSort,MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-inbound',
  templateUrl: './inbound.component.html',
  styleUrls: ['./inbound.component.scss']
})
export class InboundComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  ngOnInit() {
   
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(InboundDialog, {
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
      selector: 'inbound-dialog',
      templateUrl: 'inbound.dialog.html'
    })
    export class InboundDialog implements OnInit {
     
    
    
      constructor( public dialogRef: MatDialogRef<InboundDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
        
    
      onNoClick(): void {
        this.dialogRef.close();
      }
     

    
      ngOnInit() {
 

                 }


}

