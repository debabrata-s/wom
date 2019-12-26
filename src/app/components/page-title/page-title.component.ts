import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  template: `
    <h2 class="page-title">{{pageTitle}}</h2>
  `,
  styles: []
})
export class PageTitleComponent implements OnInit {
  title="No title";
  constructor() { }
  
  @Input() pageTitle: string;
  ngOnInit() {
  }

}
