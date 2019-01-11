import { Component, OnInit, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../reducers/index'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(public store: Store<fromApp.AppState>) { }

  ngOnInit() {
  }

}
