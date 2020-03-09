import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manage-templates',
  templateUrl: './manage-templates.component.html',
  styleUrls: ['./manage-templates.component.scss']
})
export class ManageTemplatesComponent implements OnInit {
  pageTitle = ' Manage Templates ';

  constructor(private router:Router) { }

  ngOnInit() {
  }
  openAssetTemplate(){
      this.router.navigate(['/asset-templates']);
  }

}
