import { Component, OnInit, Inject, AfterViewInit, QueryList, ViewChildren, ViewChild, ElementRef } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material'
import { IAppState } from 'src/app/store/state/app.state';
import { Store, select } from '@ngrx/store';
import {FormBuilder, FormGroup} from '@angular/forms';
import { selectCommentList } from 'src/app/store/selectors/comment.selector';
import { Observable } from 'rxjs';
import { IComment } from 'src/app/models/comment.interface';
import { CreateComment } from 'src/app/store/actions/comment.actions';
import { selectLoadingState } from 'src/app/store/selectors/loading.selector';
import { selectLoggedIn } from 'src/app/store/selectors/loggedIn.selector';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.sass']
})

/**
 * @class
 * @implements {OnInit}
*/
export class CommentsComponent implements OnInit, AfterViewInit {
  /**
   * @type {QueryList<any>}
   * Query the commentsDiv from the DOM
   */
  @ViewChildren('commentsDiv') commentsDiv: QueryList<any>
  /**
   * @type {ElementRef}
   * To hold the commentContent DIV Element
   */
  @ViewChild('commentContent',{static: false}) commentContentDialog: ElementRef

  /**
   * @type {string}
   * The blogId property of the blog
  */ 
  blogId: string
  /**
   * @type {boolean}
   * Boolean to monitor if the user is near the bottom. Will control if the scrollBottom() is triggered.
  */
  isNearBottom: boolean = true;
  /**
   * @type {boolean}
   * The loading state
  */
  loggedIn$: Observable<boolean> = this._store.pipe(select(selectLoggedIn));
  /**
   * @type {IComment[]}
   * To hold the comments state that belong to this blog.
  */
  comments: IComment[];
  /**
   * @type {any}
   * The comment form 
  */
  commentForm: any;
  /**
   * @type {Observable<boolean>}
   * Observable to retrieve loading state from the store.
  */
  loading$: Observable<boolean> = this._store.pipe(select(selectLoadingState))

  constructor(
    /**
     * Inject the data passed from the blogs component
    */
    @Inject(MAT_DIALOG_DATA) public data: any,
    /**
     * @type {Store<IAppState>}
     *  inject the store
    */
    private _store: Store<IAppState>,
    /**Inject the formBuilder*/
    private formBuilder: FormBuilder
  ) {

    /**
     * Get the blogId from the passed blog.
    */
    this.blogId = data.blogId
    /**
     * Build the comment form
    */
    this.commentForm = this.formBuilder.group({
        name: "",
        comment: ""
    });
   }

  ngAfterViewInit(): void {

    /**
     * Scroll to the bottom to show the latest comment
    */
    this.scrollToBottom();

    /**
     * Subscribe to when a comment is added.
     */
    this.commentsDiv.changes.subscribe(()=>{
      /**
       * Only scroll if the user is near the Bottom of the scroll height.
      */
      if(this.isNearBottom){
        /**
         * Scroll to the bottom to view the latest comment.
        */
        this.scrollToBottom();
      }

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
  /**
   * @param {FormGroup} commentForm
   * function to submit the data from the comment form
   */
  onSubmit(commentForm: FormGroup){
    /**
     * Return if invalid
    */
    if (commentForm.invalid) {
      return;
    }
    /**
     * @type {string}
     * Generate a random id. Will be used as blog id.
    */
    let generatedId: string = Math.floor(Math.random()*1000).toString();
    /**
     * @type {IComment}
     * The comment data
    */
    let comment: IComment={
      id: generatedId,
      body: commentForm.value.comment,
      name: commentForm.value.name,
      blogId: this.blogId
    }
    /**
     * Dispatch the AddNewComment action and pass the comment.
    */
    this._store.dispatch(new CreateComment(comment));
    /**
     * Clear the comment input only and not the name input
     */ 
    commentForm.reset({name:commentForm.value.name, comment: ""})
  }

  /**
   * Scrolls the commentDialog to bottom.
  */
  private scrollToBottom(): void{
    this.commentContentDialog.nativeElement.scroll({
      top: this.commentContentDialog.nativeElement.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }
  /**
   * Will get fired when the commentDialog is scrolled.
   * Monitor if the comment content is near the bottom
   * Used to toggle the isNearBottom.
  */
 scrolled(){
    const threshold = 150;
    const position = this.commentContentDialog.nativeElement.scrollTop + this.commentContentDialog.nativeElement.offsetHeight;
    const height = this.commentContentDialog.nativeElement.scrollHeight;
    this.isNearBottom = position > (height-threshold);
 }
}
