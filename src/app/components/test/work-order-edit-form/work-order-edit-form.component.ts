import { Component, OnInit } from '@angular/core';
import { FormDataService } from 'src/app/services/form-data.service';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog } from '@angular/material';
import { AddFilesDialogFormComponent } from '../../detail-components/dialog-forms/add-files-dialog-form/add-files-dialog-form.component';

@Component({
  selector: 'app-work-order-edit-form',
  templateUrl: './work-order-edit-form.component.html',
  styleUrls: ['./work-order-edit-form.component.scss']
})
export class WorkOrderEditFormComponent implements OnInit {
  title = "Refrigerator door broke"
  desc = "description about the broken door"
  imagePath = "damage.jpg"
  dueDate = "Tue Feb 18 2020 00:00:00 GMT+0530 (India Standard Time)"
  repeatingSchedule = ""
  priority = ""
  worker = ""
  additionalWorker = ""
  team = ""
  loc = ""
  asset = ""
  purchaseOrder = ""
  estDuration = ""
  assets = ['asset1', 'asset2', 'asset3'];
  teams = ['team1', 'team2', 'team3'];
  locations = ['location1', 'location2', 'location3'];
  categories = ['category1', 'category2', 'category3'];
  durations = ['Today', 'Tomorrow', 'Next 7 days', 'This Month', 'This Quater', 'This Year', 'Next 30 days', 'Yesterday', 'Last Week', 'Last Month'];
  workerss = [ 'worker1', 'worker2', 'worker3'];
  subtasks = ['Sub-task Status', 'Text Field', 'Number Field', 'Inspection Check', 'Multiple Choice', 'Meter Reading'];
  checklists = ['checklist1', 'checklist2', 'checklist3']
  // 
  showAddTasks = false;
  constructor(private formData: FormDataService, private apiService: ApiService, public dialog: MatDialog){}

  ngOnInit() {
  }
  onFileInput(event) {
    this.imagePath = event.target.files[0].name;
  }
  openFileDialog(){
    const dialogRef = this.dialog.open(AddFilesDialogFormComponent, {
      width: '600px',
      height: '450px'
    })
  }
 
}


