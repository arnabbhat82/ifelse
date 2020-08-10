import { Component, OnInit, HostListener, ViewChildren } from '@angular/core';
import { GetdocsService, SubDocumentById } from '../getdocs.service';
import { AppPasswordDirective } from '../app-password.directive';

declare var require: any;
const FileSaver = require('file-saver');

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  pdfFiles = [
    {
      name: 'PDF File One',
      startPage: 2,
      path: 'https://storage.googleapis.com/astufoundationlko/sample.pdf'
    },
    {
      name: 'PDF File Two',
      startPage: 4,
      path: 'https://storage.googleapis.com/astufoundationlko/sample.pdf'
    },
  ];
  subdocumentById: SubDocumentById[] = [];
  screenHeight: any;
  screenWidth: number;
  heightinpx: string;
  actualHeight: string;

  @ViewChildren(AppPasswordDirective) dirs;
  constructor(private authService: GetdocsService) {
    this.getScreenSize();
  }
  ngOnInit() {
    // this.authService.getDocumentById('2', '4');
    console.log('arnab');
    this.authService.getDocumentById().subscribe(responseData => {
      this.subdocumentById = responseData;
      console.log(this.subdocumentById);
    });
  }

  downloadPdf(pdfUrl: string, pdfName: string) {
    FileSaver.saveAs(pdfUrl, pdfName);
  }

  openDoc(pdfUrl: string, startPage: number) {
    window.open(pdfUrl + '#page=' + startPage, '_blank', '', true);
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight - 200;
    this.heightinpx = window.innerHeight + 'px';
    this.screenWidth = window.innerWidth;
    this.actualHeight = this.screenHeight + 'px';
    console.log('Window Screen Height: ' + this.heightinpx, 'Window Screen Width: ' + this.screenWidth);
  }

}
