import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.sass']
})
export class AddBlogComponent implements OnInit {
  fileData: File = null;
  previewUrl:any = null;
  // fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  constructor() { }

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

}
