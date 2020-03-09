import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-assistant-page',
  templateUrl: './assistant-page.component.html',
  styleUrls: ['./assistant-page.component.scss']
})
export class AssistantPageComponent implements OnInit {
  pageTitle = "Assistant";
  exit =true;

  constructor() { }

  ngOnInit() {
  }

  cross(){
    this.exit = false;
  }

}
