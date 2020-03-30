import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { CommentsComponent } from './comments/comments.component';
import { IAppState } from 'src/app/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { GetBlogs } from 'src/app/store/actions/blog.actions';
import { selectBlogList } from 'src/app/store/selectors/blog.selector';
import { selectNewBlogList } from 'src/app/store/selectors/newBlog.selector';
import { GetComments } from 'src/app/store/actions/comment.actions';
import { selectCommentList } from 'src/app/store/selectors/comment.selector';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.sass']
})
export class BlogsComponent implements OnInit {
  blogs$ = this._store.pipe(select(selectBlogList));
  newBlogs$ = this._store.pipe(select(selectNewBlogList));
  // comments$ = this._store.pipe(select(selectCommentList))
  
  constructor(
    private dialog: MatDialog,
    private _store: Store<IAppState>
  ) {}

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
    this.dialog.open(CommentsComponent, dialogConfig);
  }

}
