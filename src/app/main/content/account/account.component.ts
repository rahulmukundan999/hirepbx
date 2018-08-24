import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSort,MatTableDataSource} from '@angular/material';
import { ContactService } from './contact.service';
import { Contact } from './contact';
import { MatTableModule, MatSortModule } from '@angular/material';
import { CdkTableModule} from '@angular/cdk/table';
import {DataSource} from '@angular/cdk/table';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  providers: [ContactService]
})

export class AccountComponent implements OnInit {
 

  dataSource;
  displayedColumns=['firstname','lastname','mob','mob2','home','home2','action'];
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  contacts: Contact[];
  contact: Contact;

  constructor(public dialog: MatDialog,private contactService: ContactService) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      disableClose: true,
      width: '460px',
      height:'590px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
      this.contactService.getContacts()
      .subscribe(contacts =>  this.dataSource=new MatTableDataSource(contacts));
     

     
    });
  }
  ngOnInit() {
    this.contactService.getContacts()
    .subscribe(contacts => this.contacts = contacts);
    this.contactService.getContacts()
    .subscribe(contacts =>  this.dataSource=new MatTableDataSource(this.contacts));

  
      
              }
      deleteContact(id:any)
  {
    if(confirm("Are you sure"))
    {
    var contacts=this.contacts;
    this.contactService.deleteContact(id).subscribe(data =>{

      if(data.n==1)
      {
        for(var i=0;i<contacts.length;i++)
        {
          if(contacts[i]._id==id)
          {
            contacts.splice(i,1);
          }
        }
      }
      this.dataSource=new MatTableDataSource(contacts);
    })
  }
}
}
  

    @Component({
      selector: 'dialog-overview-example-dialog',
      templateUrl: 'dialog-overview-example-dialog.html',
      styleUrls: ['./dialog.css'],
      providers: [ContactService]
    })
    export class DialogOverviewExampleDialog implements OnInit {
      contacts: Contact[];
      contact: Contact;
      firstname: string;
      lastname: string;
      company: string;
      mob: string;
      mob2: string;
      home: string;
      home2: string;
      business: string;
      business2: string;
      email: string;
      other: string;
      bfax: string;
      hfax: string;
      ofax: string;
      hello="everve";

    
      constructor( private contactService: ContactService,
        public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
    
      onNoClick(): void {
        this.dialogRef.close();
      }
      addContact()
      {
      const newContact={
    firstname: this.firstname,
    lastname: this.lastname,
    company: this.company,
    mob: this.mob,
    mob2: this.mob2,
    home: this.home,
    home2: this.home2,
    business: this.business,
    business2: this.business2,
    email: this.email,
    other: this.other,
    bfax: this.bfax,
    hfax: this.hfax,
    ofax: this.ofax
  }
  this.contactService.addContact(newContact)
  .subscribe(contact=>{
 this.contacts.push(contact);
 this.contactService.getContacts()
.subscribe(contacts => this.contacts = contacts);
  });
  this.dialogRef.close();
  

}

    
ngOnInit() {
  this.contactService.getContacts()
  .subscribe(contacts => this.contacts = contacts);
    }

    }
