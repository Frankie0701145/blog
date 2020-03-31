import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material'
import { IAppState } from 'src/app/store/state/app.state';
import { Store, select } from '@ngrx/store';
import {FormBuilder} from '@angular/forms';
import { GetComments } from 'src/app/store/actions/comment.actions';
import { selectCommentList } from 'src/app/store/selectors/comment.selector';
import { AddNewComment } from 'src/app/store/actions/newComment.actions';
import {selectNewBlogList} from 'src/app/store/selectors/newComment.select'
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.sass']
})
export class CommentsComponent implements OnInit {
  blogId
  comments$ = this._store.pipe(select(selectCommentList));
  newComments$ = this._store.pipe(select(selectNewBlogList))
  commentForm: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _store: Store<IAppState>,
    private formBuilder: FormBuilder
  ) {
    this.blogId = data.blogId
    this.commentForm = this.formBuilder.group({
        name: "",
        comment: ""
    });
   }

  ngOnInit() {
    this._store.dispatch(new GetComments(this.blogId))
  }

  onSubmit(values){
    if (this.commentForm.invalid) {
      return;
    }
    let comment={
      id: "2",
      body: values.comment,
      name: values.name,
      blogId: this.blogId
    }
    let container = document.getElementById("commentContent");
    container.scrollTop = container.scrollHeight

    this._store.dispatch(new AddNewComment(comment))
   
  }

}
