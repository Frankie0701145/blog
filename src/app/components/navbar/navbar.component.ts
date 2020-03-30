import { Component, OnInit } from '@angular/core';
import {selectLoggedIn} from '../../store/selectors/loggedIn.selector'
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { LogoutSuccess } from 'src/app/store/actions/loggedIn.actions';
import {Router} from '@angular/router'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean

  constructor(
    private _store: Store<IAppState>,
    private route: Router
  ) {
    this._store.pipe(select(selectLoggedIn)).subscribe((loggedIn)=>{
        this.loggedIn =loggedIn;
    });
  }

  ngOnInit() {
  }
  logout(){
    this._store.dispatch(new LogoutSuccess())
    this.route.navigate(['/blogs'])
  }

}
