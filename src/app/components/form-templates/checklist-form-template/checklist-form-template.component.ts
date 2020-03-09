import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-checklist-form-template',
  templateUrl: './checklist-form-template.component.html',
  styleUrls: ['./checklist-form-template.component.scss']
})
export class ChecklistFormTemplateComponent implements OnInit {
  checklistFormTemplateForm: FormGroup;
  taskItems: FormArray;
  subtasks = ['Sub-task Status', 'Text Field', 'Number Field', 'Inspection Check', 'Multiple Choice', 'Meter Reading']
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.checklistFormTemplateForm = this.fb.group({
      name: [''],
      tasks: this.fb.group({
        taskItems: this.fb.array([]),
      })
    })
  }
  createTask() {
    return this.fb.group({
      taskType: [''],
      subtask: ['']
    });
  }
  addTask() {
    this.taskItems = <FormArray>this.checklistFormTemplateForm.get('tasks.taskItems');
    this.taskItems.push(this.createTask());
  }
 
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.checklistFormTemplateForm.get('tasks.taskItems')['controls'], event.previousIndex, event.currentIndex);
    moveItemInArray(this.checklistFormTemplateForm.get('tasks.taskItems').value, event.previousIndex, event.currentIndex);
  }

  activeNote: string;
  enter(i) {
    this.activeNote = this.checklistFormTemplateForm.get('tasks.taskItems')['controls'][i].get('taskType').value;
  }


  onSubmit(){
    console.log(this.checklistFormTemplateForm.value);
    
  }
}