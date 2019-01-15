import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import * as fromApp from 'src/app/reducers';
import * as fromApp from '../../reducers/index'; 
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/shared/user.model';
import { NgForm } from '@angular/forms';
import * as UserAction from '../store/user.actions';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit{
  user = new User("","","","","","");

  constructor(private store:Store<fromApp.AppState>, private authAF:AngularFireAuth) { 
    this.store.select('user').subscribe(user => {
      this.user = user;
    });
    this.user.email = this.authAF.auth.currentUser.email;
  }


  ngOnInit() {
  }


  onEdit(f:NgForm){
    this.user.name =f.value.name;
    this.user.surname =f.value.surname;
    this.user.city =f.value.city;
    this.store.dispatch(new UserAction.UpdateUser(this.user));
    console.log("called on edit", this.user);
  }
}
