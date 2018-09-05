import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSort,MatTableDataSource} from '@angular/material';
import { RingService } from './ring.service';
import { Ring } from './ring';




@Component({
  selector: 'app-ring',
  templateUrl: './ring.component.html',
  styleUrls: ['./ring.component.scss'],
  providers: [RingService]
})
export class RingComponent implements OnInit {

  rings: Ring[];
  ring: Ring;

  
  constructor(public dialog: MatDialog,private ringService: RingService) { }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(RingDialog, {
      disableClose: false,
      width: '460px',
      height:'370px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ringService.getRings()
      .subscribe(rings => this.rings = rings);


     
    });
  } 
  
  ngOnInit() {
    this.ringService.getRings()
    .subscribe(rings => this.rings = rings);


  
      
              }
      deleteRing(id:any)
  {
    if(confirm("Are you sure"))
    {
    var rings=this.rings;
    this.ringService.deleteRing(id).subscribe(data =>{

      if(data.n==1)
      {
        for(var i=0;i<rings.length;i++)
        {
          if(rings[i]._id==id)
          {
            rings.splice(i,1);
          }
        }
      }
      this.ringService.getRings()
      .subscribe(rings => this.rings = rings);
    })
  }
}
}
export interface DialogData {
  animal: string;
  name: string;
} 

    @Component({
      selector: 'ring-dialog',
      templateUrl: 'ring.dialog.html',
      providers: [RingService]
    })
    export class RingDialog implements OnInit {
     
    
      rings:Ring[];
      ring: Ring;
      name: any;
      extension: any;
      timeout: any;
    
      constructor( private ringService: RingService,public dialogRef: MatDialogRef<RingDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
        
     
    
      onNoClick(): void {
        this.dialogRef.close();
      }
     

 
      addRing()
      {
      const newRing={
    name: this.name,
    extension: this.extension,
    timeout: this.timeout
  }
  this.ringService.addRing(newRing)
  .subscribe(ring=>{
 this.rings.push(ring);
 this.ringService.getRings()
.subscribe(rings => this.rings = rings);
  });
  this.dialogRef.close();
  

}

    
ngOnInit() {
  this.ringService.getRings()
  .subscribe(rings => this.rings = rings);
    }

    }
