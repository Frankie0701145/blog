import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { IAppState } from 'src/app/store/state/app.state';
import { Store } from '@ngrx/store';
import { LoginSuccess } from 'src/app/store/actions/loggedIn.actions';
import {Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm
  hide: boolean= true;

  constructor(
    private formBuilder: FormBuilder,
    private _store: Store<IAppState>,
    private route: Router
  ) { 
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["",Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit(userData){
      if (this.loginForm.invalid) {
          return;
      }
      let payload ={
        accessToken: "asmcdaklsnmclamslcmkalmc"
      }
      this._store.dispatch(new LoginSuccess(payload));
      this.route.navigate(['/blogs'])
  }

}
