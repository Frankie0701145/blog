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
export class LoginComponent implements OnInit {
  /**The login form*/
  loginForm;
  /**The property to toggle the visibility of the password input*/ 
  hide: boolean= true;

  constructor(
    /**inject the formBuilder*/
    private formBuilder: FormBuilder,
    /**inject the store*/
    private _store: Store<IAppState>,
    /**inject the router*/
    private route: Router
  ) { 
    /**create the formBuilder*/
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["",Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit(userData){
      /**Return if the form is invalid*/
      if (this.loginForm.invalid) {
          return;
      }
      /**Payload to pass to the LoginSuccess Action*/
      let payload ={
        accessToken: "asmcdaklsnmclamslcmkalmc"
      }
      /**Call the LoginSuccess action*/
      this._store.dispatch(new LoginSuccess(payload));
      /**Dispatch the success message*/
      this._store.dispatch(new AddSuccessMessage({message:"Login in Successfully"}));
      /**navigate to the blogs route*/
      this.route.navigate(['/blogs']);
  }

}
