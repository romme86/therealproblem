import { User } from 'src/app/shared/user.model';

export const UPDATE_USER = "UPDATE_USER";

export class UpdateUser{
    readonly type = UPDATE_USER;
    constructor(public user:User){
        console.log("constructing action", user)
    }
}


export type UserActions = UpdateUser;