import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit {
  pageTitle = "Categories";
  viewMode = "tab1";
  categoryForm: FormGroup;
  
  workOrderCategories = [];
  assetStatus = [];
  purchaseOrders = [];
  meters = [];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.categoryForm = this.fb.group({
      categoryName: ['']
    });
  }
  onSubmit() {
    if(this.viewMode=='tab1'){
      this.workOrderCategories.push(this.categoryForm.value.categoryName);
    }
    else if(this.viewMode=='tab2'){
      this.assetStatus.push(this.categoryForm.value.categoryName);
    }
    else if(this.viewMode=='tab3'){
      this.purchaseOrders.push(this.categoryForm.value.categoryName);
    }
    else if(this.viewMode=='tab4'){
      this.meters.push(this.categoryForm.value.categoryName);
    }
    else{
      console.error('invalid ');
    }
  }
}
