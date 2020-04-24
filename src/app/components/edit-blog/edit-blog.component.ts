import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {FormBuilder} from '@angular/forms';
import { IAppState } from 'src/app/store/state/app.state';
import { selectBlogList } from 'src/app/store/selectors/blog.selector';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { selectLoadingState } from 'src/app/store/selectors/loading.selector';
import { EditBlog } from 'src/app/store/actions/blog.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.sass']
})
export class EditBlogComponent implements OnInit {
  /**To hold the file data of the image*/
  fileData: File = null;
  /**for holding the preview url*/
  previewUrl:any = null;
  /**to hold the form for the blog*/
  blogForm;
  /**The blog*/
  blog;
  /**The blogId*/
  blogId: string;
  /**select the loading state*/
  loading$: Observable<boolean> = this._store.pipe(select(selectLoadingState))
  

  constructor(
    /**inject the formBuilder*/
    private formBuilder: FormBuilder,
    /**inject the store*/
    private _store: Store<IAppState>,
    /**inject the route*/
    private route: ActivatedRoute,
    /**inject the router*/
    private router: Router,
  ) {
    /**subscribe to the paramMap and retrieve the id*/
    this.route.paramMap.subscribe((params: ParamMap)=>{
      this.blogId = "" +params.get('id')
    });

  }

  /**monitor upload of image and set the preview*/
  fileProgress(event: any){
    this.fileData = <File> event.target.files[0];
    this.preview()
  }

  /**function to set the previewUrl*/
  preview(){
    let reader = new FileReader()
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => { 
      this.previewUrl = reader.result; 
    }
  }

  ngOnInit() {

    /**select the blogs from the state*/
    this._store.pipe(select(selectBlogList)).subscribe((blogs)=>{
      /**retrieve the blog that match the blogId*/
      let blogsResult = blogs.filter((blog)=>blog.id==this.blogId)
      let blog = blogsResult[0]
      /**Build the form */
      this.blogForm = this.formBuilder.group({...blog});
      /**set the previewUrl*/
      this.previewUrl = blog.photoUrl;
      /**Set the blog*/
      this.blog= blog;
    });
  }

  /**Submit the editForm*/
  onSubmit(formValue){
    /**Create the data*/
    let data = {
      title: formValue.title,
      body: formValue.body,
      photoUrl: this.previewUrl
    }
    /**Dispatch the action EditBlog(which is an effect), passing the payload of the property to edit with the blogId*/
    /**Will be handled by the editBlog$ effect*/
    this._store.dispatch(new EditBlog({blogId: this.blogId, blogProperties: data}));
  }

}
