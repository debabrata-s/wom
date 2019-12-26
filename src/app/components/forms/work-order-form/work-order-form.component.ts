import { Component, OnInit } from '@angular/core';
import { FormDataService } from 'src/app/services/form-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-work-order-form',
  templateUrl: './work-order-form.component.html',
  styleUrls: ['./work-order-form.component.scss']
})
export class WorkOrderFormComponent implements OnInit {
  
  workOrderForm : FormGroup;
  workers = [];
  assets = [];
  categories = [];
  teams = [];
  locations = [];
  repeatingSchedules = [];
  constructor(private fb: FormBuilder,private formData: FormDataService) { }

  ngOnInit() {
    this.workOrderForm = this.fb.group({
      title:['',Validators.required],
      desc:['',Validators.maxLength(500)],
      image:[''],
      dueDate:['',Validators.required],
      repeatingSchedule:[''],
      estimatedDuration:[''],
      priority:[''],
      category:[''],
      worker:[''],
      additionalWorkers:[''],
      team:[''],
      location:[''],
      assets:[''],
      signature:['']
    });
   
    this.workers = this.formData.getWorkers();
    this.assets = this.formData.getAssets();
    this.categories = this.formData.getWorkOrderCategories();
    this.teams = this.formData.getTeams();
    this.locations = this.formData.getLocations();
    this.repeatingSchedules = this.formData.getRepeatingSchedules();
  }
onSubmit(){
  console.log(this.workOrderForm.value);
}
}
