import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSort,MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-receptionist',
  templateUrl: './receptionist.component.html',
  styleUrls: ['./receptionist.component.scss']
})
export class ReceptionistComponent implements OnInit {


  constructor(public dialog: MatDialog) { }
  ngOnInit() {
   
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ReceptionistDialog, {
      disableClose: false,
      width: '460px',
      height:'670px'
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
      selector: 'receptionist-dialog',
      templateUrl: 'receptionist.dialog.html',
      styleUrls: ['./receptionist.dialog.scss']
    })
    export class ReceptionistDialog implements OnInit {
     
    
    
      constructor( public dialogRef: MatDialogRef<ReceptionistDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
        
    
      onNoClick(): void {
        this.dialogRef.close();
      }
     

    
      ngOnInit() {
 

                 }


}

