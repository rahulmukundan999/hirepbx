import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSort,MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-trunk',
  templateUrl: './trunk.component.html',
  styleUrls: ['./trunk.component.scss']
})
export class TrunkComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  ngOnInit() {
   
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(TrunkDialog, {
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
      selector: 'trunk-dialog',
      templateUrl: 'trunk.dialog.html'
    })
    export class TrunkDialog implements OnInit {
     
    
    
      constructor( public dialogRef: MatDialogRef<TrunkDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
        
    
      onNoClick(): void {
        this.dialogRef.close();
      }
     

    
      ngOnInit() {
 

                 }


}
