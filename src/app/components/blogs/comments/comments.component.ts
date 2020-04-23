import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material'
import { IAppState } from 'src/app/store/state/app.state';
import { Store, select } from '@ngrx/store';
import {FormBuilder, FormGroup} from '@angular/forms';
import { selectCommentList } from 'src/app/store/selectors/comment.selector';
import { Observable } from 'rxjs';
import { IComment } from 'src/app/models/comment.interface';
import { CreateComment } from 'src/app/store/actions/comment.actions';
import { selectLoadingState } from 'src/app/store/selectors/loading.selector';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.sass']
})

/**
 * @class
 * @implements {OnInit}
*/
export class CommentsComponent implements OnInit {
  /**The blogId property of the blog*/ 
  blogId: string
  /**
   * To hold the comments that belong to this blog from the state
  */
  comments: IComment[];
  /**The comment form */
  commentForm: any;
  loading$: Observable<boolean> = this._store.pipe(select(selectLoadingState))

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
      /**
       * Retrieve all the comments from the state then filter only those that belongs for this blog
      */
      this._store.pipe(select(selectCommentList)).subscribe((comments)=>{
        /**Retrieve only comments that belong to this blog*/
        let blogComments: IComment[] =  comments.filter((comment)=>{
          return comment.blogId === this.blogId;
        });
        this.comments = blogComments;
      });
  }
  /**function to submit the data from the comment form*/
  onSubmit(commentForm: FormGroup){
    /**Return if invalid*/
    if (commentForm.invalid) {
      return;
    }
    /**Generate a random id. Will be used as blog id.*/
    let generatedId: string = Math.floor(Math.random()*1000).toString();
    /**The comment data*/
    let comment: IComment={
      id: generatedId,
      body: commentForm.value.comment,
      name: commentForm.value.name,
      blogId: this.blogId
    }
    /**Retrieve the commentContent*/
    let container = document.getElementById("commentContent");
    /**Scroll to the bottom of the commentContent*/
    container.scrollTop = container.scrollHeight
    /**Dispatch the AddNewComment action and pass the comment.*/
    this._store.dispatch(new CreateComment(comment));
    /**Clear the comment input*/ 
    commentForm.reset({name:commentForm.value.name, comment: ""})
  }
}
