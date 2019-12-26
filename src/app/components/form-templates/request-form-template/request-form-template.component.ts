import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-request-form-template',
  templateUrl: './request-form-template.component.html',
  styleUrls: ['./request-form-template.component.scss']
})
export class RequestFormTemplateComponent implements OnInit {
  requestFormTemplateForm: FormGroup;
  taskItems: FormArray;
  constructor(private fb: FormBuilder) { }
  options = ['optional', 'hidden', 'required'];
  ngOnInit() {
    this.requestFormTemplateForm = this.fb.group({
      tasks: this.fb.group({
        taskItems: this.fb.array([])
      }),
      permissions: this.fb.group({
        setAsset: ['optional'],
        setLocation: ['optional'],
        setWorkerAssigned: ['optional'],
        setDueDate: ['optional'],
        setCategory: ['optional'],
        setTeam: ['optional']
      })
    });
  }

  permissions = [
    { name: 'setAsset', desc: 'Allow Requesters to set Asset' },
    { name: 'setLocation', desc: 'Allow Requesters to set Location' },
    { name: 'setWorkerAssigned', desc: 'Allow Requesters to set Worker Assigned' },
    { name: 'setDueDate', desc: 'Allow Requesters to set Due Date' },
    { name: 'setCategory', desc: 'Allow Requesters to set Category' },
    { name: 'setTeam', desc: 'Allow Requesters to set Team' }
  ];

  createTask() {
    return this.fb.group({
      taskType: [''],
      question: [''],
      required: false
    });
  }
  addTask() {
    this.taskItems = <FormArray>this.requestFormTemplateForm.get('tasks.taskItems');
    this.taskItems.push(this.createTask());
  }
  onSubmit() {
    console.log(this.requestFormTemplateForm.value);
    console.log(this.requestFormTemplateForm.value);
  }

}
