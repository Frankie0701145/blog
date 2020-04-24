import { Component, OnInit } from '@angular/core';
import {FormBuilder, Form} from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { CreateBlog } from 'src/app/store/actions/blog.actions';
import { IAppState } from 'src/app/store/state/app.state';
import { selectLoadingState } from 'src/app/store/selectors/loading.selector';
import { IBlog } from 'src/app/models/blog.interface';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.sass']
})

/**
 * @class
 * @implements {OnInit}
*/
export class AddBlogComponent implements OnInit {
  /**Will hold the photo data*/
  fileData: File = null;  
  /**Will hold the url of the preview photo*/
  previewUrl:any = null; 
  /**Will hold the blog form*/
  blogForm;  
  /**Will hold the loading state*/
  loading: boolean; 

  /**
   * @param {FormBuilder} formBuilder -The form builder
   * @param {Store} _store -The store
  */
  constructor(
    /**inject the formBuilder*/
    private formBuilder: FormBuilder,
    /**inject the store*/
    private _store: Store<IAppState>
  ) { 
    /**select the loading state*/
    this._store.pipe(select(selectLoadingState)).subscribe((loading)=>{
      this.loading = loading;
    });
    
    /**Create the blog form*/
    this.blogForm = this.formBuilder.group({
      title: "",
      body: "",
      image: ""
    });
  }

  ngOnInit() {
  }

  /**
   * To handle the upload of photo
   * @param event -event emitted by the photo input field.
  */
  fileProgress(event: any){
    /**Retrieve the file*/
    this.fileData = <File> event.target.files[0];
    this.preview()
  }
  /**
   * To preview the uploaded photo
  */
  preview(){
    let reader = new FileReader()
    /**Read the image uploaded*/
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => { 
      /**set the url to the previewUrl*/
      this.previewUrl = reader.result; 
    }
  }

  /**
   * Handles the submission of the form
   * @param blogData
  */
  onSubmit(blogData){
    /**Check if the form is invalid*/
    if (this.blogForm.invalid) {
      return;
    }
    /**Generate a random id. Will be used as blog id.*/
    let generatedId: number = Math.floor(Math.random()*1000);
    /**Blog information. Will be used as payload in CreateBlog action.*/
    let data: IBlog = {
      title: blogData.title,
      photoUrl: this.previewUrl,
      body: blogData.body,
      id: generatedId.toString(),
      commentNo: 0
    }
    /**dispatch the createBlog action*/
    this._store.dispatch(new CreateBlog(data));
  }

}
