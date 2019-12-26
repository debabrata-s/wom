import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files-page',
  templateUrl: './files-page.component.html',
  styleUrls: ['./files-page.component.scss']
})
export class FilesPageComponent implements OnInit {
  pageTitle = "Files";
  viewMode = "tab1";
  constructor() { }

  ngOnInit() {
  }

}
