import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { IAppState } from 'src/app/store/state/app.state';
import { Store } from '@ngrx/store';
import { LoginSuccess } from 'src/app/store/actions/loggedIn.actions';
import {Router } from '@angular/router'
import { AddSuccessMessage } from 'src/app/store/actions/successMessage.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
/**
 * @class
 * @implements {OnInit}
*/
export class LoginComponent implements OnInit {
  /**
   * The login form
  */
  loginForm;
  /**
   * The property to toggle the visibility of the password input.
  */ 
  hide: boolean= true;
  /**
   * @param {FormBuilder} formBuilder
   * @param {Store} _store
   * @param {Router} route
  */
  constructor(
    /**inject the formBuilder*/
    private formBuilder: FormBuilder,
    /**inject the store*/
    private _store: Store<IAppState>,
    /**inject the router*/
    private route: Router
  ) { 
    /**
     * Initialize a login form group
    */
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["",Validators.required]
    });
  }

  ngOnInit() {
  }

  /**
   * Handles the submission of the login form
   * @param formValue - login form value
  */
  onSubmit(formValue){
      /**Return if the form is invalid*/
      if (this.loginForm.invalid) {
          return;
      }
      /**
       * Payload to pass to the LoginSuccess Action
      */
      let payload ={
        accessToken: "asmcdaklsnmclamslcmkalmc"
      }
      /**
       * Call the LoginSuccess action. Toggle the loggedIn state to true
      */
      this._store.dispatch(new LoginSuccess(payload));
      /**
       * Dispatch the AddSuccessMessage action.
      */
      this._store.dispatch(new AddSuccessMessage({message:"Login in Successfully"}));
      /**
       * navigate to the blogs route.
      */
      this.route.navigate(['/blogs']);
  }

}
