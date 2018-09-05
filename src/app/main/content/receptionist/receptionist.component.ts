import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSort,MatTableDataSource} from '@angular/material';
import { ReceptionistService } from './receptionist.service';
import {Receptionist}  from './receptionist';

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
  openWav(): void {
    const dialogRef = this.dialog.open(WavDialog, {
      disableClose: false,
      width: '460px',
      height:'400px'
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
     
    
      receptionists:Receptionist[];
      receptionist:Receptionist;
            name: string;
            extension: string;
            wav: string;
            one:any;
            two:any;
            three:any;
            four:any;
            five:any;
            six:any;
            seven:any;
            eight:any;
            nine:any;


    
      constructor( public dialogRef: MatDialogRef<ReceptionistDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        private receptionistService: ReceptionistService) {}
        
    
      onNoClick(): void {
        this.dialogRef.close();
      }

      addReceptionist()
      {
      const newReceptionist={
        name: this.name,
        extension: this.extension,
        wav: this.wav,
        one:this.one,
        two:this.two,
        three:this.three,
        four:this.four,
        five:this.five,
        six:this.six,
        seven:this.seven,
        eight:this.eight,
        nine:this.nine
  }
  this.receptionistService.addReceptionist(newReceptionist)
  .subscribe(inbound=>{
 this.receptionists.push(inbound);
 this.receptionistService.getReceptionists()
.subscribe(receptionists => this.receptionists = receptionists);
  });
  this.dialogRef.close();
  

}

     

    
      ngOnInit() {
 

                 }


}
export interface DialogData1 {
  animal: string;
  name: string;
} 


@Component({
  selector: 'wav-dialog',
  templateUrl: 'wav-dialog.html',
  providers: [ReceptionistService]
})
export class WavDialog implements OnInit {
 filemain:File;


  constructor( public dialogRef: MatDialogRef<WavDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData1,private receptionistService: ReceptionistService) {}
    

  onNoClick(): void {
    this.dialogRef.close();
  }
  uploadFile(event) {
    this.filemain = event.target.files[0];
      console.log(this.filemain); // You will see the file
    
      
  
  }
  uploadWav()
  {
console.log(this.filemain);
this.receptionistService.addWav(this.filemain)
.subscribe((response) => {
  console.log('set any success actions...');

}


);


  }


  ngOnInit() {


             }


}



