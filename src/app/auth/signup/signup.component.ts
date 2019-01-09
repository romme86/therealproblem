import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';
import * as fromApp from '../../reducers/index'; 
import * as AuthAction from '../store/auth.actions';
import {User} from '../../shared/user.model'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) { }

  user = new User("","","");

  ngOnInit() {
  }

  onSignup(f:NgForm){
    this.store.dispatch(new AuthAction.TrySignup({email: f.value.email, password: f.value.password, stateCode: f.value.stateCode}))
  }
}
