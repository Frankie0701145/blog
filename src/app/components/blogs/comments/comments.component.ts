import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material'
import { IAppState } from 'src/app/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { GetComments } from 'src/app/store/actions/comment.actions';
import { selectCommentList } from 'src/app/store/selectors/comment.selector';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.sass']
})
export class CommentsComponent implements OnInit {
  blogId
  comments$ = this._store.pipe(select(selectCommentList));

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _store: Store<IAppState>
  ) {
    this.blogId = data.blogId
   }

  ngOnInit() {
    this._store.dispatch(new GetComments(this.blogId))
  }

}
