import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { CreateBlog } from 'src/app/store/actions/blog.actions';
import { IAppState } from 'src/app/store/state/app.state';
import { selectLoadingState } from 'src/app/store/selectors/loading.selector';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.sass']
})
export class AddBlogComponent implements OnInit {
  fileData: File = null;
  previewUrl:any = null;/**to hold the url of the preview*/
  blogForm;  /**to hold the blog form*/
  loading: boolean; /**select the loading state*/

  uploadedFilePath: string = null;

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
    
    /**the form for the blog*/
    this.blogForm = this.formBuilder.group({
      title: "",
      body: "",
      image: ""
    });
  }

  ngOnInit() {
  }
  /**to monitor the upload of the file and add to preview*/
  fileProgress(event: any){
    this.fileData = <File> event.target.files[0];
    this.preview()
  }
  /**To preview the uploaded file*/
  preview(){
    let reader = new FileReader()
    /**Read the image uploaded*/
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => { 
      /**set the url to the previewUrl*/
      this.previewUrl = reader.result; 
    }
  }
  onSubmit(blogData){
    if (this.blogForm.invalid) {
      return;
    }
    /**random number to pick a photo url from the url*/
    let randomNumber = Math.floor(Math.random() * 3 );
    /**Generate a random id*/
    let generatedId: number = Math.floor(Math.random()*1000);
    /**form the data to send as payload*/
    let data = {
      title: blogData.title,
      photoUrl: this.previewUrl,
      body: blogData.body,
      id: generatedId.toString(),
      commentNo: 4
    }
    /**dispatch the createBlog action*/
    this._store.dispatch(new CreateBlog(data));
  }

}
