import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent implements OnInit {
  requestForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.requestForm = this.fb.group({
      title: [''],
      desc: [''],
      priority: [''],
      image: [''],
      file: ['']
    });
  }
  onSubmit() {
    console.log(this.requestForm);
    console.log('Saved: ' + JSON.stringify(this.requestForm.value));
  }
}
