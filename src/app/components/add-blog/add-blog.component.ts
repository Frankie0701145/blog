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
  previewUrl:any = null;
  blogForm;
  // fileUploadProgress: string = null;
  uploadedFilePath: string = null;

  constructor(
    private formBuilder: FormBuilder,
    private _store: Store<IAppState>
  ) { 

    this.blogForm = this.formBuilder.group({
      title: "",
      body: "",
      image: ""
    });
  }

  ngOnInit() {
  }

  fileProgress(event: any){
    this.fileData = <File> event.target.files[0];
    this.preview()
  }
  preview(){
    let reader = new FileReader()
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => { 
      this.previewUrl = reader.result; 
    }
  }
  onSubmit(blogData){
    let dummyImagesUrl: string[] = [
      "https://lets-share.nyc3.digitaloceanspaces.com/chain-1812013_1280.jpg",
      "https://lets-share.nyc3.digitaloceanspaces.com/girl-1868930_1280.jpg",
      "https://lets-share.nyc3.digitaloceanspaces.com/wedding-rings-3611277_1280.jpg"
    ]
    let randomNumber = Math.floor(Math.random() * 3 );
    let photoUrl =  dummyImagesUrl[randomNumber];
    let data = {
      title: blogData.title,
      photoUrl: photoUrl,
      body: blogData.body,
      id: "10",
      commentNo: 4
    }
    this._store.dispatch(new CreateBlog(data));
  }

}
