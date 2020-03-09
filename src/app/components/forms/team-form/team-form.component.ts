import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Team } from 'src/app/interfaces/team';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss']
})
export class TeamFormComponent implements OnInit {
  teamFormData:Team;
  teamForm: FormGroup;
  workers = ['jare','eres','fdafd'];
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<TeamFormComponent>) { }

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
    this.teamFormData = this.teamForm.value;
    this.dialogRef.close();
  }
  closeDialog(){
    this.dialogRef.close();
  }

}
