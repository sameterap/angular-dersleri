import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {

  uploader: FileUploader;
  hasBaseDropZoneOver = false;
  url = 'https://evening-anchorage-3159.herokuapp.com/api/';
  constructor() { }

  ngOnInit() {
    this.initializeUploader();
  }

  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.url,
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });

    // Aşağıdaki hata alınrsa bunun eklenmesi gerekir.
    // Access to XMLHttpRequest at 'https://api.imgur.com/3/upload' from origin 'http://localhost:4200' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'. The credentials mode of requests initiated by the XMLHttpRequest is controlled by the withCredentials attribute.
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };

    this.uploader.onSuccessItem = (item, response, status, headers) => {
      console.log('basarılı');
      console.log(response);
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      console.log('basarısız');
      console.log(item);
      console.log(response);
      console.log(status);
      console.log(headers);
    };

  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }


}
