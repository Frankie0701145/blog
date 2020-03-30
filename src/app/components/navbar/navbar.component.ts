import { Component, OnInit } from '@angular/core';
import {selectLoggedIn} from '../../store/selectors/loggedIn.selector'
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean

  constructor(
    private _store: Store<IAppState>
  ) {
    this._store.pipe(select(selectLoggedIn)).subscribe((loggedIn)=>{
        this.loggedIn =loggedIn;
    });
  }

  ngOnInit() {
  }

}
