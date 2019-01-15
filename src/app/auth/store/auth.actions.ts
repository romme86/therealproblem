import { Action } from '@ngrx/store';

export const TRY_SIGNUP = "TRY_SIGNUP";
export const SIGNUP = "SIGNUP";
export const SET_TOKEN = "SET_TOKEN";
export const TRY_SIGNIN = "TRY_SIGNIN";
export const SIGNIN = "SIGNIN";
export const LOGOUT = "LOGOUT";

export class TrySignup{
    readonly type = TRY_SIGNUP;
    constructor(public payload:{email: string, password: string, stateCode: string} ){
        console.log('try signup constructor');
    }
}

export class Signup{
    readonly type = SIGNUP;
    constructor(public payload: {email: string, stateIdCode: string, token: string}){}
}

export class TrySignin{
    readonly type = TRY_SIGNIN;
    constructor(public payload: {email:string,password:string}){}
}

export class Signin{
    readonly type = SIGNIN;
    constructor(public payload: {email:string,password:string}){}
}
export class Logout{
    readonly type = LOGOUT;
    constructor(public payload: {}){}
}

export class SetToken{
    readonly type = SET_TOKEN;
    constructor(public token:string){}
}

export type AuthActions = TrySignup | Signup | TrySignin | Signin | SetToken | Logout;