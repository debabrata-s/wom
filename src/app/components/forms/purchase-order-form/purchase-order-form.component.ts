import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { SelectPartDialogComponent } from '../../detail-components/dialog-forms/select-part-dialog/select-part-dialog.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-purchase-order-form',
  templateUrl: './purchase-order-form.component.html',
  styleUrls: ['./purchase-order-form.component.scss']
})
export class PurchaseOrderFormComponent implements OnInit {
  vendors = ['vendor1', 'vendor2', 'vendor3'];
  categories = ['category1', 'category2', 'category3'];
  purchaseOrderForm: FormGroup;
  partItems: FormArray;
  dataArray = [];
  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.purchaseOrderForm = this.fb.group({
      purchaseOrderDetails: this.fb.group({
        title: [''],
        dueDate: [''],
        vendors: [''],
        category: [''],
        additionalDetails: ['']
      }),
      parts: this.fb.group({
        partItems: this.fb.array(this.dataArray)
      }),
      requesterInformation: this.fb.group({
        companyName: [''],
        address: this.fb.group({
          address: [''],
          city: [''],
          state: [''],
          zipCode: ['']
        }),
        phoneNumber: [''],
        faxNumber: ['']
      }),
      shippingInformation: this.fb.group({
        useCompanyAddress: [''],
        shipToName: [''],
        companyName: [''],
        address: this.fb.group({
          address: [''],
          city: [''],
          state: [''],
          zipCode: ['']
        }),
        phoneNumber: [''],
        faxNumber: ['']
      }),
      additionalInformation: this.fb.group({
        purchaseOrderDate: [''],
        requisitioner: [''],
        shippingMethod: [''],
        FOBShippingPoint: [''],
        terms: [''],
        notes: ['']
      })
    });
  }

  onSubmit() {
    console.log(this.purchaseOrderForm);
    console.log('Saved: ' + JSON.stringify(this.purchaseOrderForm.value));
  }
  openParts() {
    const dialogRef = this.dialog.open(SelectPartDialogComponent)
  }
  addNonExistingPart() {
    this.partItems = <FormArray>this.purchaseOrderForm.get('parts.partItems');
    this.partItems.push(this.addPart());
  }
  addPart() {
    return this.fb.group({
      name: [''],
      cost: [''],
      quantity: [''],
      desc: [''],
      nonStock: [false]
    });
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.purchaseOrderForm.get('parts.partItems')['controls'], event.previousIndex, event.currentIndex);
    moveItemInArray(this.purchaseOrderForm.get('parts.partItems').value, event.previousIndex, event.currentIndex);
  }

  activeNote: string;
  enter(i) {
    this.activeNote = this.purchaseOrderForm.get('parts.partItems')['controls'][i].get('name').value;
  }
  removePart(i) {
    this.dataArray.splice(i,1);
    this.partItems.removeAt(i);
  }
  getTotal() {
    var total = 0;
    return total;
  }

}
