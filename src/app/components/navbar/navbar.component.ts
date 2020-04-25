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
   *boolean to control the hiding and showing the search input.
  */
  showSearchInput: boolean = false;
  /**
   * Will control if the search button gets displayed
   * It will only be true on the /blogs route.
  */
  showSearchBtn: boolean

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
     * Checks when the user visits the blogs route and show the search button
    */
    this.router.events.pipe(
      filter((event)=> {
        return event instanceof NavigationEnd
      }),
      map((event)=> {
        return event['url'].endsWith('/blogs')
      })
    ).subscribe((result)=>{
      this.showSearchBtn = result;
    });
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
     * Close the searchInput by changing the showSearchInput to false.
    */
    this.showSearchInput = false;
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
    /**Open the search input*/
    this.showSearchInput = true;
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
       * Dispatch the Searching action. Toggle the isSearching state to true
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
