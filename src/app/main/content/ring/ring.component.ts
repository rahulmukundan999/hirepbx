import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSort,MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-ring',
  templateUrl: './ring.component.html',
  styleUrls: ['./ring.component.scss']
})
export class RingComponent implements OnInit {
  constructor(public dialog: MatDialog) { }
  ngOnInit() {
   
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(RingDialog, {
      disableClose: false,
      width: '460px',
      height:'370px'
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
      selector: 'ring-dialog',
      templateUrl: 'ring.dialog.html'
    })
    export class RingDialog implements OnInit {
     
    
    
      constructor( public dialogRef: MatDialogRef<RingDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
        
     
    
      onNoClick(): void {
        this.dialogRef.close();
      }
     

    
      ngOnInit() {
 

                 }


}
