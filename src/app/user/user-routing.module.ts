import { NgModule } from '@angular/core';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { RouterModule } from '@angular/router';

const routes = [
  {path:"userdetails",component:UserdetailsComponent},
]


@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class UserRoutingModule { }
