import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { Store } from '@ngrx/store';
import { CreateBlog } from 'src/app/store/actions/blog.actions';
import { IAppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.sass']
})
export class AddBlogComponent implements OnInit {
  fileData: File = null;
  previewUrl:any = null;/**to hold the url of the preview*/
  blogForm;  /**to hold the blog form*/

  uploadedFilePath: string = null;

  constructor(
    /**inject the formBuilder*/
    private formBuilder: FormBuilder,
    /**inject the store*/
    private _store: Store<IAppState>
  ) { 
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
    /**Dummy image data to display on the blog*/
    let dummyImagesUrl: string[] = [
      "https://lets-share.nyc3.digitaloceanspaces.com/chain-1812013_1280.jpg",
      "https://lets-share.nyc3.digitaloceanspaces.com/girl-1868930_1280.jpg",
      "https://lets-share.nyc3.digitaloceanspaces.com/wedding-rings-3611277_1280.jpg"
    ]
    /**random number to pick a photo url from the url*/
    let randomNumber = Math.floor(Math.random() * 3 );
    /**pick a random url*/
    let photoUrl =  dummyImagesUrl[randomNumber];
    /**form the data to send as payload*/
    let data = {
      title: blogData.title,
      photoUrl: photoUrl,
      body: blogData.body,
      id: "10",
      commentNo: 4
    }
    /**dispatch the createBlog action*/
    this._store.dispatch(new CreateBlog(data));
  }

}
