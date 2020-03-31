import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { CommentsComponent } from './comments/comments.component';
import { IAppState } from 'src/app/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { GetBlogs } from 'src/app/store/actions/blog.actions';
import { selectBlogList } from 'src/app/store/selectors/blog.selector';
import { selectNewBlogList } from 'src/app/store/selectors/newBlog.selector';
import {selectFilteredBlogList } from 'src/app/store/selectors/filteredBlogs.selector'
import {  RemoveComments } from 'src/app/store/actions/comment.actions';
import { selectIsSearching } from 'src/app/store/selectors/isSearching.selector';


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.sass']
})
export class BlogsComponent implements OnInit {
  blogs$ = this._store.pipe(select(selectBlogList));
  newBlogs$ = this._store.pipe(select(selectNewBlogList));
  filteredBlog$ = this._store.pipe(select(selectFilteredBlogList ))
  isSearching: boolean;
  constructor(
    private dialog: MatDialog,
    private _store: Store<IAppState>
  ) {
    this._store.pipe(select(selectIsSearching)).subscribe((isSearching)=>{
      console.log(isSearching)
      this.isSearching = isSearching
    })
  }

  ngOnInit() {
    this._store.dispatch(new GetBlogs());
 
  }

  openCommentDialog(blogId: string){
    const dialogConfig = new MatDialogConfig();
    // this._store.dispatch(new GetComments(blogId));
    dialogConfig.maxHeight = "500px";
    dialogConfig.maxWidth = "500px";
    dialogConfig.minHeight = "200px";
    dialogConfig.minWidth = "200px";
    dialogConfig.data = {
        blogId: blogId
    };
    // dialogConfig.width = "60%";
    let dialogRef = this.dialog.open(CommentsComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result)=>{
        this._store.dispatch(new RemoveComments())
    })
  }

}
