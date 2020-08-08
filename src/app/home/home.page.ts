import { Component, OnInit, HostListener } from '@angular/core';
import { GetdocsService, SubDocumentById } from '../getdocs.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  subdocumentById: SubDocumentById[] = [];
  screenHeight: any;
  screenWidth: number;
  heightinpx: string;
  actualHeight: string;

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
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight - 200;
    this.heightinpx = window.innerHeight + 'px';
    this.screenWidth = window.innerWidth;
    this.actualHeight = this.screenHeight + 'px';
    console.log('Window Screen Height: ' + this.heightinpx, 'Window Screen Width: ' + this.screenWidth);
  }

}
