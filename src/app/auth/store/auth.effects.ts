
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { map, switchMap, mergeMap } from 'rxjs/operators';
import { TRY_SIGNUP, TRY_SIGNIN } from './auth.actions';
import * as firebase from 'firebase';
import * as AuthActions from './auth.actions';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User, UserInterface } from 'src/app/shared/user.model';

@Injectable()
export class AuthEffects {
    private user = {
        email: '',
        name: '',
        surname: '',
        password:'',
        token: '',
        city: ''
    }
    constructor(private actions$: Actions, private router: Router, private authAF: AngularFireAuth, private db: AngularFirestore) { 
    }

    @Effect()
    authSignup = this.actions$.pipe(
        ofType(TRY_SIGNUP),
        map((action: AuthActions.TrySignup) => {
            console.log('lets try to signup');
            return action.payload;
        }),
        switchMap((authData: { email: string, password: string, stateCode: string }) => {
            console.log(authData);
            // return Promise.all([from(firebase.auth().createUserWithEmailAndPassword(authData.email,authData.password)),authData.stateCode]);
            return Promise.all([from(firebase.auth().createUserWithEmailAndPassword(authData.email,authData.password)),authData.stateCode]);

        }),
        switchMap((arrayResult) => {
            console.log('arrayResult',arrayResult);
            //push user in db
            this.user.email = firebase.auth().currentUser.email;
            const id = this.db.createId();
            this.db.collection('users').doc(id).set(this.user)
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });;
            this.db.collection('users').add(this.user).then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });;
            return Promise.all([from(firebase.auth().currentUser.getIdToken()),arrayResult[1]]);
        }),
        mergeMap((arrayResult: any[]) => {
            this.router.navigate(['/']);
            return [
                {
                    type: AuthActions.SIGNUP,
                    stateIdCode: arrayResult[1] //the state code
                },
                {
                    type: AuthActions.SET_TOKEN,
                    payload:arrayResult[0] //the token
                
                },
            ]
        })

    )
    @Effect()
    authSignin = this.actions$.pipe(
        ofType(TRY_SIGNIN),
        map((action: AuthActions.TrySignin) => {
            return action.payload;
        }),
        switchMap((authData: { email: string, password: string}) => {
            console.log('authData: ',authData);
            this.router.navigate(['/']);
            return this.authAF.auth.signInWithEmailAndPassword(authData.email,authData.password);
            // return null;
            // return from(firebase.auth().signInWithEmailAndPassword(authData.email,authData.password));
        }),
        // switchMap((arrayResult) => {
        //     console.log('arrayResult: ',arrayResult);
        //     return from(firebase.auth().currentUser.getIdToken());
        // }),
        mergeMap((authResp) => {
            console.log("authResp", authResp);
            this.router.navigate(['/']);
            return [
                {
                    type: AuthActions.SIGNIN,
                },
                // {
                //     type: AuthActions.SET_TOKEN,
                //     token:token
                // },
            ]
        })

    )
    
}