import * as AuthActions from './auth.actions';

export interface State {
    token: string,
    authenticated: boolean
}

const initialState = {
    token: null,
    authenticated: false
}

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
    switch (action.type) {
        case AuthActions.TRY_SIGNUP:
            console.log('try signup reducer');
            return {
                ...state,
                stateCode: action.payload.stateCode
            };
        case AuthActions.SIGNUP:
            console.log('signup reducer');
            return {
                ...state,
                stateCode: action.payload.stateIdCode
            };
        case AuthActions.SET_TOKEN:
            console.log('set token reducer');
            return {
                ...state,
                stateCode: action.token
            }
        case AuthActions.SIGNIN:
            console.log('signin reducer');
            return {...state}
        case AuthActions.TRY_SIGNIN:
            console.log('try signin reducer');
            return {...state}
        default:
            return state;
    }

}