import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  playback:any;
  animal: string;
  name: string;

  constructor( private router: Router) { }

  ngOnInit() {

    alert("hello");
    
  }

}
