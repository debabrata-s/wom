import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { CategoryFormDataService } from 'src/app/services/category-form-data.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  categoryForm: FormGroup;
  viewMode = "tab1";

  constructor(private fb: FormBuilder, private categoryFormService: CategoryFormDataService, public dialogRef: MatDialogRef<CategoryFormComponent>) { }

  ngOnInit() {
    this.categoryForm = this.fb.group({
      categoryName: ['']
    });
    this.categoryFormService.viewMode$.subscribe(tab => this.viewMode = tab);
    //this.categoryFormService.categorySubject.subscribe(tab => this.viewMode = tab);
  }
  onSubmit() {
    if(this.categoryForm.value.categoryName == ""){
      console.log('please category name');
      
    }
    else if (this.viewMode == 'tab1') {
      this.categoryFormService.workOrderCategories.push(this.categoryForm.value.categoryName);
    }
    else if (this.viewMode == 'tab2') {
      this.categoryFormService.assetStatus.push(this.categoryForm.value.categoryName);
    }
    else if (this.viewMode == 'tab3') {
      this.categoryFormService.purchaseOrders.push(this.categoryForm.value.categoryName);
    }
    else if (this.viewMode == 'tab4') {
      this.categoryFormService.meters.push(this.categoryForm.value.categoryName);
    }
    else {
      console.error('invalid ');
    }
    this.dialogRef.close();
  }

}
