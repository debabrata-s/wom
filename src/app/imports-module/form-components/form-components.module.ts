import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkOrderRequestFormComponent } from '../../components/forms/work-order-request-form/work-order-request-form.component';
import { RequestFormComponent } from '../../components/forms/request-form/request-form.component';
import { LocationFormComponent } from '../../components/forms/location-form/location-form.component';
import { AssetFormComponent } from '../../components/forms/asset-form/asset-form.component';
import { PartFormComponent } from '../../components/forms/part-form/part-form.component';
import { PurchaseOrderFormComponent } from '../../components/forms/purchase-order-form/purchase-order-form.component';
import { MeterFormComponent } from '../../components/forms/meter-form/meter-form.component';
import { PeopleFormComponent } from '../../components/forms/people-form/people-form.component';
import { VendorFormComponent } from '../../components/forms/vendor-form/vendor-form.component';
import { FileFormComponent } from '../../components/forms/file-form/file-form.component';
import { CustomerFormComponent } from '../../components/forms/customer-form/customer-form.component';
import { CustomReportFormComponent } from '../../components/forms/custom-report-form/custom-report-form.component';
import { TeamFormComponent } from 'src/app/components/forms/team-form/team-form.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CustomReportFormComponent,
    WorkOrderRequestFormComponent,
    RequestFormComponent,
    LocationFormComponent,
    AssetFormComponent,
    PartFormComponent,
    PurchaseOrderFormComponent,
    MeterFormComponent,
    PeopleFormComponent,
    VendorFormComponent,
    FileFormComponent,
    CustomerFormComponent,
    TeamFormComponent
  ],
  exports: [
    CustomReportFormComponent,
    WorkOrderRequestFormComponent,
    RequestFormComponent,
    LocationFormComponent,
    AssetFormComponent,
    PartFormComponent,
    PurchaseOrderFormComponent,
    MeterFormComponent,
    PeopleFormComponent,
    VendorFormComponent,
    FileFormComponent,
    CustomerFormComponent,
    TeamFormComponent
  ]
})
export class FormComponentsModule { }
