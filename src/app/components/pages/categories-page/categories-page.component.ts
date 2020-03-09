import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { CategoryFormComponent } from '../../forms/category-form/category-form.component';
import { CategoryFormDataService } from 'src/app/services/category-form-data.service';
import { CategoryService } from 'src/app/services/category.service';
import { DeleteCategoryDialogComponent } from '../../detail-components/dialog-confirmations/delete-category-dialog/delete-category-dialog.component';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit {
  pageTitle = "Categories";
  //tabs from categories page should be bound to the categories form viewMode to push value to respective 
  viewMode = "tab1";
  workOrderCategories=[{name:'wo1',isfilpped:false},{name:'wo2',isfilpped:false},{name:'wo3',isfilpped:false},{name:'wo4',isfilpped:false}];
  assetStatus = [{name:'astatus1',isfilpped:false},{name:'astatus2',isfilpped:false}];
  purchaseOrders = [{name:'purchaseOrder1',isfilpped:false},{name:'purchaseOrder2',isfilpped:false}];
  meters = [{name:'meter1',isfilpped:false}, {name:'meter2',isfilpped:false}];
  categories: any[];
  show = true;
  
  constructor( public dialog: MatDialog, private categoryFormDataService: CategoryFormDataService, private categoryService: CategoryService) { }

  ngOnInit() {
  //  this.workOrderCategories = this.categoryFormDataService.workOrderCategories;
  //  this.assetStatus = this.categoryFormDataService.assetStatus;
  //  this.purchaseOrders = this.categoryFormDataService.purchaseOrders;
  //  this.meters = this.categoryFormDataService.meters;
   
   this.categoryService.getAllCategory().subscribe(data => {
     this.categories = data.message;
     console.log(this.categories);
   })

  }
  openDialog(){
    const dialogRef = this.dialog.open(CategoryFormComponent);
    this.categoryFormDataService.categorySubject.next(this.viewMode);
  }
  deleteCategory(){
    const dialogRef = this.dialog.open(DeleteCategoryDialogComponent);
  }

  
}
