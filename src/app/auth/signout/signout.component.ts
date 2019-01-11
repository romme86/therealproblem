import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {

  constructor(private authAF: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }
  signout(){
    this.authAF.auth.signOut();
    this.router.navigate(['/']);
  }
}
