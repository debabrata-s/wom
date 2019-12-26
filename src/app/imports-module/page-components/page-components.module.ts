import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsPageComponent } from '../../components/pages/reports-page/reports-page.component';
import { RequestsPageComponent } from '../../components/pages/requests-page/requests-page.component';
import { SharedWorkOrdersPageComponent } from '../../components/pages/shared-work-orders-page/shared-work-orders-page.component';
import { LocationsPageComponent } from '../../components/pages/locations-page/locations-page.component';
import { AssetsPageComponent } from '../../components/pages/assets-page/assets-page.component';
import { WorkOrdersPageComponent } from '../../components/pages/work-orders-page/work-orders-page.component';
import { PartsPageComponent } from '../../components/pages/parts-page/parts-page.component';
import { PurchaseOrdersPageComponent } from '../../components/pages/purchase-orders-page/purchase-orders-page.component';
import { MetersPageComponent } from '../../components/pages/meters-page/meters-page.component';
import { PeoplePageComponent } from '../../components/pages/people-page/people-page.component';
import { VendorsPageComponent } from '../../components/pages/vendors-page/vendors-page.component';
import { CategoriesPageComponent } from '../../components/pages/categories-page/categories-page.component';
import { FilesPageComponent } from '../../components/pages/files-page/files-page.component';
import { RequestPortalPageComponent } from 'src/app/components/pages/request-portal-page/request-portal-page.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ReportsPageComponent,
    RequestsPageComponent,
    SharedWorkOrdersPageComponent,
    LocationsPageComponent,
    AssetsPageComponent,
    WorkOrdersPageComponent,
    PartsPageComponent,
    PurchaseOrdersPageComponent,
    MetersPageComponent,
    PeoplePageComponent,
    VendorsPageComponent,
    CategoriesPageComponent,
    FilesPageComponent,
    RequestPortalPageComponent
  ],
  exports: [
    ReportsPageComponent,
    RequestsPageComponent,
    SharedWorkOrdersPageComponent,
    LocationsPageComponent,
    AssetsPageComponent,
    WorkOrdersPageComponent,
    PartsPageComponent,
    PurchaseOrdersPageComponent,
    MetersPageComponent,
    PeoplePageComponent,
    VendorsPageComponent,
    CategoriesPageComponent,
    FilesPageComponent,
    RequestPortalPageComponent
  ]
})
export class PageComponentsModule { }
