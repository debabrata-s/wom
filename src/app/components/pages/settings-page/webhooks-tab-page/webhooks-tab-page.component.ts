import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { WebhookFormComponent } from 'src/app/components/forms/webhook-form/webhook-form.component';

@Component({
  selector: 'app-webhooks-tab-page',
  templateUrl: './webhooks-tab-page.component.html',
  styleUrls: ['./webhooks-tab-page.component.scss']
})
export class WebhooksTabPageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDrawer(){
    const dialogRef = this.dialog.open(WebhookFormComponent, {
      width: '500px',
      height:'650px'
    })
  }

}
