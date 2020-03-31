import { Component, OnInit } from '@angular/core';
import {selectLoggedIn} from '../../store/selectors/loggedIn.selector';
import {selectIsSearching} from '../../store/selectors/isSearching.selector';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { LogoutSuccess } from 'src/app/store/actions/loggedIn.actions';
import {Router} from '@angular/router'
import { FilterBlogs } from 'src/app/store/actions/filteredBlogs.action';
import { selectBlogList } from 'src/app/store/selectors/blog.selector';
import { Searching } from 'src/app/store/actions/isSearching.actions';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean
  searching: boolean
  constructor(
    private _store: Store<IAppState>,
    private route: Router
  ) {
    this._store.pipe(select(selectLoggedIn)).subscribe((loggedIn)=>{
        this.loggedIn =loggedIn;
    });
    this._store.pipe(select(selectIsSearching)).subscribe((isSearching)=>{
        this.searching = isSearching
    })
  }

  ngOnInit() {
  }
  logout(){
    this._store.dispatch(new LogoutSuccess())
    this.route.navigate(['/blogs'])
  }
  closeSearch(){
    this.searching = !this.searching;
  }
  openSearch(){
    this.searching = !this.searching
  }
  search(e){
    let searchText:  string = e.target.value;
    console.log(searchText)
    this._store.pipe(select(selectBlogList)).subscribe((blogs)=>{
      this._store.dispatch(new Searching())
      this._store.dispatch(new FilterBlogs({searchText: searchText, blogs: blogs }))
    });
  }

}
