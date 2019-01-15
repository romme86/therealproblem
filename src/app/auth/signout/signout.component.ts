import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../../reducers/index';
import * as UserActions from '../../user/store/user.actions';
import { User } from 'src/app/shared/user.model';
@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {

  constructor(public store: Store<fromApp.AppState>, private authAF: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }
  signout() {
    console.log('signout');
    this.authAF.auth.signOut();
    this.router.navigate(['/']);
    this.store.dispatch(new UserActions.UpdateUser(new User('','','','','','')));

  }
}
