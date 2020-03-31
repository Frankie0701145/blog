import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { selectLoggedIn } from '../store/selectors/loggedIn.selector';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  loggedIn: boolean
  constructor(
    public router: Router,
    private _store: Store<IAppState>
  ) { 
    this._store.pipe(select(selectLoggedIn)).subscribe((loggedIn)=>{
         this.loggedIn = loggedIn
    })
  }

  canActivate(): boolean{
    if(!this.loggedIn){
      this.router.navigate(['login'])
      return false
    }
    return true
  }
}
