import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss']
})
export class TeamFormComponent implements OnInit {
  teamForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.teamForm = this.fb.group({
      name:[''],
      desc:[''],
      peopleInTeam:['']
    });
  }
  onSubmit() {
    console.log(this.teamForm);
    console.log('Saved: ' + JSON.stringify(this.teamForm.value));
  }

}
