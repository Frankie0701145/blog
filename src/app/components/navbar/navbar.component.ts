import { Component, OnInit } from '@angular/core';
import {selectLoggedIn} from '../../store/selectors/loggedIn.selector';
import {selectIsSearching} from '../../store/selectors/isSearching.selector';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { LogoutSuccess } from 'src/app/store/actions/loggedIn.actions';
import {Router, NavigationEnd} from '@angular/router'
import { FilterBlogs, RemoveFilteredBlogs } from 'src/app/store/actions/filteredBlogs.action';
import { selectBlogList } from 'src/app/store/selectors/blog.selector';
import { Searching, StopSearching } from 'src/app/store/actions/isSearching.actions';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
/**
 * @class
 * @implements {OnInit}
*/
export class NavbarComponent implements OnInit {
  /**
   * Will hold the value of the loggedIn from the state
  */
  loggedIn: boolean
  /**
   * Will hold the value of searching from the state.
   * Will be used to show the filteredBlogs instead of the blogs 
  */
  searching: boolean
  /**
   * Will control if the search button gets displayed
   * It will only be true on the /blogs page.
  */
  showSearchBtn$: Observable<boolean>

  /**
   * @param {Store} _store
   * @param {Router} router
  */
  constructor(
    /**
     * Inject the store
    */
    private _store: Store<IAppState>,
    /**
     * inject the router
    */
    private router: Router
  ) {
    /**
     * retrieve the loggedIn state from the store
    */
    this._store.pipe(select(selectLoggedIn)).subscribe((loggedIn)=>{
        this.loggedIn =loggedIn;
    });
    /**
     * retrieve the searching state from the store
    */
    this._store.pipe(select(selectIsSearching)).subscribe((isSearching)=>{
        this.searching = isSearching
    })
    /**
     * Checks when the use visits the blogs route to show the search button
    */
    this.showSearchBtn$ = this.router.events.pipe(
      filter((event)=> event instanceof NavigationEnd),
      map((event)=> event['url'].endsWith('/blogs'))
    );
  }

  ngOnInit() {
  }
  /**
   * Handles the action when the user clicks the logout button
   */
  logout(){
    /**
     * Dispatch the LogoutSuccess action to toggle the loggedIn to false
    */
    this._store.dispatch(new LogoutSuccess())
    /**
     * navigate to the blogs endpoint
    */
    this.router.navigate(['/blogs'])
  }
  /**
   * Closes the search bar.
  */
  closeSearch(){
    /**
     * Change the searching to false
    */
    this.searching = !this.searching;
    /**
     * Dispatch the stopSearching to change the isSearching state to false
    */
    this._store.dispatch(new StopSearching())
    /**
     * Remove all the filteredBlogs from the state
    */
    this._store.dispatch(new RemoveFilteredBlogs())
  }

  /**
   * Open the search bar.
  */
  openSearch(){
    //
    this.searching = !this.searching
  }
  /**
   * Handles the action triggered by the search input.
  */
  search(e){
    /**
     * Retrieve the searchText from the input
    */
    let searchText:  string = e.target.value;
    /**
     * Retrieve all the  blogs from the state
    */
    this._store.pipe(select(selectBlogList)).subscribe((blogs)=>{
      /**
       * Dispatch the Searching action. Toggle the searching state to true
      */
      this._store.dispatch(new Searching())
      /**
       * Dispatch the FilterBlogs action and pass the searchText and The blogs to filter from.
       * Action responsible for filtering 
      */
      this._store.dispatch(new FilterBlogs({searchText: searchText, blogs: blogs }))
    });
  }

}
