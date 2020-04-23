import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GetBlogs } from 'src/app/store/actions/blog.actions';
import { IAppState } from './store/state/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { GetComments } from './store/actions/comment.actions';

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
    /**dispatch the GetComments action to fetch the comments*/
    this._store.dispatch(new GetComments())
  }
}

