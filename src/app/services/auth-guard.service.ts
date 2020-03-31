import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { selectLoggedIn } from '../store/selectors/loggedIn.selector';

/**Guard Service to restrict access to some endpoint if the loggedIn state is not true*/
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  loggedIn: boolean
  constructor(
    /**Inject the router*/
    public router: Router, 
    /**inject the store*/
    private _store: Store<IAppState>
  ) { 
    /**select the loggedIn portion of the state*/
    this._store.pipe(select(selectLoggedIn)).subscribe((loggedIn)=>{
         this.loggedIn = loggedIn
    })
  }

  canActivate(): boolean{
    /**check if the loggedIn is false*/
    if(!this.loggedIn){
      /**if false redirect the user to the login page*/
      this.router.navigate(['login'])
      /**return false*/
      return false
    }
    /**return true*/
    return true
  }
}
