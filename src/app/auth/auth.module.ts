import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AuthRoutingModule } from './auth-routing.module';
import {FormsModule} from '@angular/forms';
import { SignoutComponent } from './signout/signout.component';
// import {MatFormFieldModule} from '@angular/material';


@NgModule({
  declarations: [SignupComponent, SigninComponent, SignoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    // MatFormFieldModule
  ]
})
export class AuthModule { }
