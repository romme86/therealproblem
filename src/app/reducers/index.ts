import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromAuth from '../auth/store/auth.reducers';
import * as fromUser from '../user/store/user.reducers';
import { User } from '../shared/user.model';
export interface AppState {
  auth: fromAuth.State,
  user:User
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  user: fromUser.userReducer
  
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
