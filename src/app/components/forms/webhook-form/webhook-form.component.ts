import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-webhook-form',
  templateUrl: './webhook-form.component.html',
  styleUrls: ['./webhook-form.component.scss']
})
export class WebhookFormComponent implements OnInit {
  events = ['e1','e2','e3','e4','e5','e6','e7','e8'];
  webhookForm: FormGroup;
  eventSelection;
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<WebhookFormComponent>) { }

  ngOnInit() {
    this.webhookForm = this.fb.group({
      title:[''],
      endpoint:[''],
      eventSelection:[''],
      events:['']
    })
    if(this.eventSelection === 'allEvents'){
      console.log('all events');
    }
  }
  onSubmit(){
    console.log(this.webhookForm.value)
  }
  closeDialog(){
    this.dialogRef.close();
  }

}
