import * as AuthActions from './auth.actions';

export interface State {

}

const initialState = {

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
            console.log('set token reducer: ', action.token);
            return {
                ...state,
                token: action.token
            }
        case AuthActions.SIGNIN:
            console.log('signin reducer');
            return {
                ...state,
                authenticated: true,
                email: action.payload.email
            }

        default:
            console.log('auth default fired')
            return state;
    }

}