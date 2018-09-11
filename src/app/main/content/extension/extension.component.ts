import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSort,MatTableDataSource} from '@angular/material';
import { ExtensionService } from './extension.service';
import { Extension } from './extension';
import { MatTableModule, MatSortModule } from '@angular/material';
import { CdkTableModule} from '@angular/cdk/table';
import {DataSource} from '@angular/cdk/table';


@Component({
  selector: 'app-extension',
  templateUrl: './extension.component.html',
  styleUrls: ['./extension.component.scss'],
  providers: [ExtensionService]
})
export class ExtensionComponent implements OnInit {

  dataSource;
  displayedColumns=['extensionno','displayname','outboundcid','password','email','action'];
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  extensions: Extension[];
  extension: Extension;

  
  constructor(public dialog: MatDialog,private extensionService: ExtensionService) { }
 
  openDialog(): void {
    const dialogRef = this.dialog.open(ExtensionDialog, {
      disableClose: false,
      width: '460px',
      height:'370px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.extensionService.getExtensions()
      .subscribe(extensions => this.extensions = extensions);
      this.extensionService.getExtensions()
      .subscribe(extensions =>  this.dataSource=new MatTableDataSource(extensions));


     
    });
  } 
  
  ngOnInit() {
    this.extensionService.getExtensions()
    .subscribe(extensions => this.extensions = extensions);

    this.extensionService.getExtensions()
    .subscribe(extensions =>  this.dataSource=new MatTableDataSource(extensions));
  
      
              }
      deleteExtension(id:any,extensionno:any)
  {
    if(confirm("Are you sure"))
    {
    var extensions=this.extensions;
    this.extensionService.deleteExtension(id,extensionno).subscribe(data =>{

      if(data.n==1)
      {
        for(var i=0;i<extensions.length;i++)
        {
          if(extensions[i]._id==id)
          {
            extensions.splice(i,1);
          }
        }
      }
      this.extensionService.getExtensions()
      .subscribe(extensions => this.extensions = extensions);
      this.dataSource=new MatTableDataSource(extensions);
    })
  }
}
}
export interface DialogData {
  animal: string;
  name: string;
} 

    @Component({
      selector: 'extension-dialog',
      templateUrl: 'extension.dialog.html',
      providers: [ExtensionService]
    })
    export class ExtensionDialog implements OnInit {
       extensions:Extension[];
      extension: Extension;
      extensionno: string;
      displayname: string;
      outboundcid: string;
      password: string;
      email: string;
     
    
    
      constructor(private extensionService: ExtensionService, public dialogRef: MatDialogRef<ExtensionDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
        

    
      onNoClick(): void {
        this.dialogRef.close();
      }
     

      addExtension()
      {
      const newExtension={
    extensionno: this.extensionno,
    displayname: this.displayname,
    outboundcid: this.outboundcid,
    password: this.password,
    email: this.email
  }
  this.extensionService.addExtension(newExtension)
  .subscribe(extension=>{
 this.extensions.push(extension);
 this.extensionService.getExtensions()
.subscribe(extensions => this.extensions = extensions);
  });
  this.dialogRef.close();
  

}

    
ngOnInit() {
  this.extensionService.getExtensions()
  .subscribe(extensions => this.extensions = extensions);
    }

    }
