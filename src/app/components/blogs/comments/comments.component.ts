import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material'
import { IAppState } from 'src/app/store/state/app.state';
import { Store, select } from '@ngrx/store';
import {FormBuilder} from '@angular/forms';
import { GetComments } from 'src/app/store/actions/comment.actions';
import { selectCommentList } from 'src/app/store/selectors/comment.selector';
import { AddNewComment } from 'src/app/store/actions/newComment.actions';
import {selectNewCommentList} from 'src/app/store/selectors/newComment.select'
import { Observable } from 'rxjs';
import { IComment } from 'src/app/models/comment.interface';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.sass']
})
export class CommentsComponent implements OnInit {
  /**The blogId property of the blog*/ 
  blogId
  /**Observable for retrieving the comments from the store*/
  comments$:Observable<IComment[]> = this._store.pipe(select(selectCommentList));
  /*** Observable for retrieving the newComments from the store*/
  newComments$: Observable<IComment[]> = this._store.pipe(select(selectNewCommentList))
  /**The comment form builder for the comment */
  commentForm: any;

  constructor(
    /**Inject the data passed from the blogs component*/
    @Inject(MAT_DIALOG_DATA) public data: any,
    /**inject the store*/
    private _store: Store<IAppState>,
    /**Inject the formBuilder*/
    private formBuilder: FormBuilder
  ) {
    /**Get the blogId from the passed blog*/
    this.blogId = data.blogId
    /**Build the comment form*/
    this.commentForm = this.formBuilder.group({
        name: "",
        comment: ""
    });
   }

  ngOnInit() {
    this._store.dispatch(new GetComments(this.blogId))
  }
  /**function to submit the data from the comment form*/
  onSubmit(values){
    /**Return if invalid*/
    if (this.commentForm.invalid) {
      return;
    }
    /**The comment data*/
    let comment={
      id: "2",
      body: values.comment,
      name: values.name,
      blogId: this.blogId
    }
    /**Retrieve the commentContent*/
    let container = document.getElementById("commentContent");
    /**Scroll to the bottom of the commentContent*/
    container.scrollTop = container.scrollHeight
    /**Dispatch the AddNewComment action and pass the comment.*/
    this._store.dispatch(new AddNewComment(comment))
   
  }

}
