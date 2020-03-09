import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
pageTitle = "Page Not Found";
  constructor() { }

  ngOnInit() {
    
    console.log("Page nOt found 404")
  }

}
