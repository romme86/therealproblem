import * as UserActions from './user.actions';
import { User } from 'src/app/shared/user.model';

export interface State{
    user:User
}

const initialState = new User("","","","","","")

export function userReducer(state = initialState, action: UserActions.UserActions){
    switch (action.type) {
        case UserActions.UPDATE_USER:
        console.log("user reducer:", action.user); 
        return {
            ...state,
            ...action.user,
        };
        
        default:
            console.log('user default fired')
            return state;
    }
}