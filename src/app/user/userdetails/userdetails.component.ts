import { Component, OnInit, AfterContentInit } from '@angular/core';
import { State, select } from '@ngrx/store';
import * as fromApp from 'src/app/reducers';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/shared/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit{
  user = new User("","","","","","");

  constructor(private state:State<fromApp.AppState>, private authAF:AngularFireAuth) { 
    let currentUser = this.authAF.auth.currentUser;
    this.user.email = currentUser.email;
  }


  ngOnInit() {
  }


  onEdit(f:NgForm){

  }
}
