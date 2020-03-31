import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {FormBuilder} from '@angular/forms';
import { IAppState } from 'src/app/store/state/app.state';
import { selectBlogList } from 'src/app/store/selectors/blog.selector';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { GetBlogs, EditBlogSuccess } from 'src/app/store/actions/blog.actions';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.sass']
})
export class EditBlogComponent implements OnInit {

  fileData: File = null;
  previewUrl:any = null;
  blogForm;
  blog;
  blogId: string;
  

  constructor(
    private formBuilder: FormBuilder,
    private _store: Store<IAppState>,
    private route: ActivatedRoute,
    private router: Router,
  ) {

    this.route.paramMap.subscribe((params: ParamMap)=>{
      this.blogId = "" +params.get('id')
      console.log(this.blogId)
    })

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

  ngOnInit() {
    this._store.dispatch(new GetBlogs());

    this._store.pipe(select(selectBlogList)).subscribe((blogs)=>{
 
      let blogsResult = blogs.filter((blog)=>blog.id==this.blogId)
      let blog = blogsResult[0]

      this.blogForm = this.formBuilder.group({...blog});
      this.blog= blog;
    });
  }

  onSubmit(formValue){
    console.log(formValue)
    let data = {
      title: formValue.title,
      body: formValue.body
    }
    this._store.dispatch(new EditBlogSuccess({blogId: this.blogId, blogProperty: data}));
    this.router.navigate(['/blogs'])
  }

}
