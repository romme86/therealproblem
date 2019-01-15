import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { from, merge } from 'rxjs';
import { map, switchMap, mergeMap } from 'rxjs/operators';
import { UPDATE_USER } from './user.actions';
import * as UserActions from './user.actions';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/shared/user.model';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable()
export class UserEffects{
    private userDoc:AngularFirestoreDocument<User>;

    constructor(private actions$: Actions, private authAF: AngularFireAuth, private db: AngularFirestore){
        console.log()
    }
    
    // @Effect()
    // userUpdate = this.actions$.pipe(
    //     ofType(UPDATE_USER),
    //     map((action: UserActions.UpdateUser) => {
    //         console.log('update user effect');
    //         return action.user;
    //     }),
    //     // switchMap((user:User)=>{
            
    //     //     return this.db
    //     // })
    // )

}

