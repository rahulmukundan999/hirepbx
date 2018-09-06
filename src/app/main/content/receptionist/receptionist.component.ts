import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSort,MatTableDataSource} from '@angular/material';
import { ReceptionistService } from './receptionist.service';
import {Receptionist}  from './receptionist';
import { Image }  from './image';

@Component({
  selector: 'app-receptionist',
  templateUrl: './receptionist.component.html',
  styleUrls: ['./receptionist.component.scss'],
  providers: [ReceptionistService]
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
      styleUrls: ['./receptionist.dialog.scss'],
      providers: [ReceptionistService]
    })
    export class ReceptionistDialog implements OnInit {
     
    
      receptionists:Receptionist[];
      receptionist:Receptionist;
            name: any;
            extension: any;
            wav: any;
            zero:any;
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
        zero:this.zero,
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
  .subscribe(receptionist=>{
 this.receptionists.push(this.receptionist);
  });
  this.receptionistService.getReceptionists()
.subscribe(receptionists => this.receptionists = receptionists);
  this.dialogRef.close();
  

}

 
ngOnInit() {
  this.receptionistService.getReceptionists()
  .subscribe(receptionists => this.receptionists = receptionists);



    
            }
    deleteReceptionist(id:any)
{
  if(confirm("Are you sure"))
  {
  var receptionists=this.receptionists;
  this.receptionistService.deleteReceptionist(id).subscribe(data =>{

    if(data.n==1)
    {
      for(var i=0;i<receptionists.length;i++)
      {
        if(receptionists[i]._id==id)
        {
          receptionists.splice(i,1);
        }
      }
    }
    this.receptionistService.getReceptionists()
    .subscribe(receptionists => this.receptionists = receptionists);
  })
}
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
 file;File;
 fd = new FormData();
 images:Image[];
 image:Image;




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
.subscribe();
this.dialogRef.close();

}



  ngOnInit() {


    this.receptionistService.getWavs()
    .subscribe(images => this.images = images);

             }


}



