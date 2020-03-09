import { Component, OnInit, Input } from '@angular/core';
import { FormDataService } from 'src/app/services/form-data.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material';
import { AddFilesDialogFormComponent } from '../../detail-components/dialog-forms/add-files-dialog-form/add-files-dialog-form.component';

@Component({
  selector: 'app-work-order-form',
  templateUrl: './work-order-form.component.html',
  styleUrls: ['./work-order-form.component.scss']
})
export class WorkOrderFormComponent implements OnInit {

  durations = ['Today', 'Tomorrow', 'Next 7 days', 'This Month', 'This Quater', 'This Year', 'Next 30 days', 'Yesterday', 'Last Week', 'Last Month'];
  workerss = ['worker1', 'worker2', 'worker3'];
  subtasks = ['Sub-task Status', 'Text Field', 'Number Field', 'Inspection Check', 'Multiple Choice', 'Meter Reading'];
  checklists = ['checklist1', 'checklist2', 'checklist3'];
  users = ['user1', 'user2', 'user3'];
  showAddTasks = false;
  hidechklist = true;
  showAssignedUser = false;
  showAssignedAsset = false;
  dataArray=[];
  mcqArray=[];
  imagePath = "";
  checklistFormTemplateForm: FormGroup;
  taskItems: FormArray;
  multipleChoiceQuestions: FormArray;
  workOrderForm: FormGroup;
  workers = [];
  assets = [];
  categories = [];
  teams = [];
  meters = [];
  locations = [];
  repeatingSchedules = ['Daily', 'Weekly', 'Every Two Weeks', 'Every Month', 'Every Two Months', 'Every Six Months', 'Every Year', 'Select Repeating Days', 'Custom Schedule'];
  customSchedules = ['Day(s)', 'Week(s)','Month(s)','Year(s)'];
  constructor(private fb: FormBuilder, private formData: FormDataService, private apiService: ApiService, public dialog: MatDialog) {
    apiService.getAllTeam().subscribe((data: any) => {
      this.teams = data.message;
    });
    apiService.getAllCategories().subscribe((data: any) => {
      this.categories = data.message;
    });
    apiService.getAllLocation().subscribe((data: any) => {
      this.locations = data.message;
    });
    apiService.getAllAsset().subscribe((data: any) => {
      this.assets = data.message;
    });
  }

  ngOnInit() {

    this.workOrderForm = this.fb.group({
      Title: [''],
      Description: [''],
      DueDate: [''],
      RepeatingDuration: [''],
      Priority: [''],
      CategoryId: [''],
      WorkerId: [''],
      AdditionalWorkerId: [''],
      TeamId: [''],
      LocationId: [''],
      AssetId: [''],
      PurchaseOrderId: [''],
      EstimatedDuration: [''],
      Images: [''],
    });

    this.checklistFormTemplateForm = this.fb.group({
      name: [''],
      tasks: this.fb.group({
        taskItems: this.fb.array(this.dataArray),
      })
    })

    this.workers = this.formData.getWorkers();
    this.assets = this.formData.getAssets();
    this.categories = this.formData.getWorkOrderCategories();
    this.teams = this.formData.getTeams();
    this.locations = this.formData.getLocations();
    // this.repeatingSchedules = this.formData.getRepeatingSchedules();

  }
  onSubmit() {
    console.log(this.workOrderForm.value);

    this.apiService.createWorkOrderRequest(this.workOrderForm.value);
  }
  onFileInput(event) {
    this.imagePath = event.target.files[0].name;
  }
  showChecklists() {
    this.hidechklist = false;
  }

  // create tasks
  createTask() {
    return this.fb.group({
      taskType: [''],
      subtask: [this.subtasks[0]],
      assignedUser: [''],
      assignedAsset: [''],
      showAssignedUser: [false],
      showAssignedAsset: [false],
      multipleChoiceQuestions: this.fb.array(this.mcqArray)
    });
  }
  createOption() {
    return this.fb.group({
      options: ['']
    });
  }
  addTask() {
    this.taskItems = <FormArray>this.checklistFormTemplateForm.get('tasks.taskItems');
    this.taskItems.push(this.createTask());
  }
  addOptions(i) {
    this.multipleChoiceQuestions = <FormArray>this.checklistFormTemplateForm.get('tasks.taskItems')['controls'][i].get('multipleChoiceQuestions.options');
    this.multipleChoiceQuestions.push(this.createOption());
  }
  removeTask(i) {
    this.dataArray.splice(i,1);
    this.taskItems.removeAt(i);
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.checklistFormTemplateForm.get('tasks.taskItems')['controls'], event.previousIndex, event.currentIndex);
    moveItemInArray(this.checklistFormTemplateForm.get('tasks.taskItems').value, event.previousIndex, event.currentIndex);
  }

  activeNote: string;
  enter(i) {
    this.activeNote = this.checklistFormTemplateForm.get('tasks.taskItems')['controls'][i].get('taskType').value;
  }


  onSubmit2() {
    console.log(this.checklistFormTemplateForm.value);

  }
  openFileDialog() {
    const dialogRef = this.dialog.open(AddFilesDialogFormComponent, {
      width: '600px',
      height: '450px'
    })
  }
}
//  this.workOrderForm = this.fb.group({
//       title: [''],
//       desc: [''],
//       image: [''],
//       dueDate: [''],
//       repeatingSchedule: [''],
//       estimatedDuration: [''],
//       priority: [''],
//       category: [''],
//       worker: [''],
//       additionalWorkers: [''],
//       team: [''],
//       location: [''],
//       assets: [''],
//       signature: ['']
//     });