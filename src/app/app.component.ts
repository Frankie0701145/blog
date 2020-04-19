import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GetBlogs } from 'src/app/store/actions/blog.actions';
import { IAppState } from './store/state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'blog';
  constructor(
    private _store: Store<IAppState>
  ){}
  ngOnInit(){
    /**dispatch the GeBlogs action to fetch blogs*/
    this._store.dispatch(new GetBlogs());
  }
}

