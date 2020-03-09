import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-team-edit-form',
  templateUrl: './team-edit-form.component.html',
  styles: []
})
export class TeamEditFormComponent implements OnInit {
  workers = ['jare','eres','fdafd'];
  teamEditForm: FormGroup;
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<TeamEditFormComponent>) { }

  ngOnInit() {
    this.teamEditForm = this.fb.group({
      peopleInTeam:['']
    })
  }
  onSubmit(){
    this.dialogRef.close();
  }

}
