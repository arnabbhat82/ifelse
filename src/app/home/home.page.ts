import { Component, OnInit } from '@angular/core';
import { GetdocsService, SubDocumentById } from '../getdocs.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  subdocumentById: SubDocumentById[] = [];

  constructor(private authService: GetdocsService) {
    // this.authService.getDocumentById('2', '4').subscribe(responseData => {
    //   this.subdocumentById = responseData;
    //   console.log(this.subdocumentById);
    // });
  }
  ngOnInit() {
    // this.authService.getDocumentById('2', '4');
    console.log('arnab');
    this.authService.getDocumentById().subscribe(responseData => {
      this.subdocumentById = responseData;
      console.log(this.subdocumentById);
    });
  }

}
