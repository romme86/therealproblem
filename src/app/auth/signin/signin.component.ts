import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.model';
import { Store } from '@ngrx/store';

import * as fromApp from '../../reducers';
import * as AuthActions from '../store/auth.actions';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public store: Store<fromApp.AppState>) { }
  user = new User("","","","","","");
  ngOnInit() {
  }
  onSignin(f:NgForm){
    console.log('signin');
    this.store.dispatch(new AuthActions.TrySignin({email: f.value.email, password: f.value.password}));
  }

}
