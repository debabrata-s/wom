import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-automated-workflows-tab-page',
  templateUrl: './automated-workflows-tab-page.component.html',
  styleUrls: ['./automated-workflows-tab-page.component.scss']
})
export class AutomatedWorkflowsTabPageComponent implements OnInit {
  isClicked: boolean = false;
  AutomatedWorkflowsForm: FormGroup;
  ifConditions = ['ifCond1', 'ifCond2', 'ifCond3']
  andConditions = ['andCond1', 'andCond2', 'andCond3']
  thenConditions = ['thenCond1', 'thenCond2', 'thenCond3']
  conditionValues = ['val1', 'val2', 'val3']
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.AutomatedWorkflowsForm = this.fb.group({
      workflowTitle:[''],
      ifCondition:[''],
      andCondition: this.fb.group({
        name:[''],
        value:['']
      }),
      thenCondition: this.fb.group({
        name:[''],
        value:['']
      })
    })
  }
  onSubmit(){
    console.log(this.AutomatedWorkflowsForm.value);
    this.isClicked = false;
  }

}
