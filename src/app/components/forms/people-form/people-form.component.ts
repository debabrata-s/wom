import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-people-form',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.scss']
})
export class PeopleFormComponent implements OnInit {
  peopleForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.peopleForm = this.fb.group({
      userRole: [''],
      emailId: ['']
    });
  }
  onSubmit() {
    console.log(this.peopleForm);
    console.log('Saved: ' + JSON.stringify(this.peopleForm.value));
  }

}
