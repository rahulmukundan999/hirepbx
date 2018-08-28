import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSort,MatTableDataSource} from '@angular/material';
import { TrunkService } from './trunk.service';
import { Trunk } from './trunk';



@Component({
  selector: 'app-trunk',
  templateUrl: './trunk.component.html',
  styleUrls: ['./trunk.component.scss'],
  providers: [TrunkService]
})
export class TrunkComponent implements OnInit {

  trunks: Trunk[];
  trunk: Trunk;


  constructor(public dialog: MatDialog,private trunkService: TrunkService) { }
  ngOnInit() {

    this.trunkService.getTrunks()
      .subscribe(trunks => this.trunks = trunks);
   
  }
     openDialog(): void {
    const dialogRef = this.dialog.open(TrunkDialog, {
      disableClose: false,
      width: '460px',
      height:'570px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.trunkService.getTrunks()
      .subscribe(trunks => this.trunks = trunks);


     
    });
  }
  deleteTrunk(id:any)
  {
    if(confirm("Are you sure"))
    {
    var trunks=this.trunks;
    this.trunkService.deleteTrunk(id).subscribe(data =>{

      if(data.n==1)
      {
        for(var i=0;i<trunks.length;i++)
        {
          if(trunks[i]._id==id)
          {
            trunks.splice(i,1);
          }
        }
      }
      this.trunkService.getTrunks()
      .subscribe(trunks => this.trunks = trunks);
    })
  }
}
}


export interface DialogData {
  animal: string;
  name: string;
} 

    @Component({
      selector: 'trunk-dialog',
      templateUrl: 'trunk.dialog.html',
      providers: [TrunkService]
    })
    export class TrunkDialog implements OnInit {
     
      trunks:Trunk[];
      trunk: Trunk;
      trunkname: string;
      username1: string;
      password: string;
      trunkip: string;
      register=false;
      
    
      constructor( public dialogRef: MatDialogRef<TrunkDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,private trunkService: TrunkService) {}
       
       
      onNoClick(): void {
        this.dialogRef.close();
      }
     

    
      ngOnInit() {

        this.trunkService.getTrunks()
        .subscribe(trunks => this.trunks = trunks);

                 }

                 addTrunk()
                 {
                   
                 const newTrunk={
               trunkname: this.trunkname,
               username1: this.username1,
               password: this.password,
               trunkip: this.trunkip,
               register: this.register
             }
             this.trunkService.addTrunk(newTrunk)
             .subscribe(trunk=>{
            this.trunks.push(trunk);
            this.trunkService.getTrunks()
           .subscribe(trunks => this.trunks = trunks);
             });
             this.dialogRef.close();
             
           
           }
           



}
