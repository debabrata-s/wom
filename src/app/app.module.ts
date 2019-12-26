import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import {  MatDatepickerModule, MatNativeDateModule, MatIconModule, MatFormFieldModule, MatInputModule, MatTabsModule } from '@angular/material';

import { ApiService } from './services/api.service';

import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { ReportsPageComponent } from './components/pages/reports-page/reports-page.component';
import { RequestsPageComponent } from './components/pages/requests-page/requests-page.component';
import { SharedWorkOrdersPageComponent } from './components/pages/shared-work-orders-page/shared-work-orders-page.component';
import { LocationsPageComponent } from './components/pages/locations-page/locations-page.component';
import { AssetsPageComponent } from './components/pages/assets-page/assets-page.component';
import { WorkOrdersPageComponent } from './components/pages/work-orders-page/work-orders-page.component';
import { PartsPageComponent } from './components/pages/parts-page/parts-page.component';
import { PurchaseOrdersPageComponent } from './components/pages/purchase-orders-page/purchase-orders-page.component';
import { MetersPageComponent } from './components/pages/meters-page/meters-page.component';
import { PeoplePageComponent } from './components/pages/people-page/people-page.component';
import { VendorsPageComponent } from './components/pages/vendors-page/vendors-page.component';
import { CategoriesPageComponent } from './components/pages/categories-page/categories-page.component';
import { FilesPageComponent } from './components/pages/files-page/files-page.component';
import { RequestPortalPageComponent } from './components/pages/request-portal-page/request-portal-page.component';


import { WorkOrderRequestFormComponent } from './components/forms/work-order-request-form/work-order-request-form.component';
import { RequestFormComponent } from './components/forms/request-form/request-form.component';
import { LocationFormComponent } from './components/forms/location-form/location-form.component';
import { AssetFormComponent } from './components/forms/asset-form/asset-form.component';
import { PartFormComponent } from './components/forms/part-form/part-form.component';
import { PurchaseOrderFormComponent } from './components/forms/purchase-order-form/purchase-order-form.component';
import { MeterFormComponent } from './components/forms/meter-form/meter-form.component';
import { PeopleFormComponent } from './components/forms/people-form/people-form.component';
import { VendorFormComponent } from './components/forms/vendor-form/vendor-form.component';
import { FileFormComponent } from './components/forms/file-form/file-form.component';
import { CustomerFormComponent } from './components/forms/customer-form/customer-form.component';
import { CustomReportFormComponent } from './components/forms/custom-report-form/custom-report-form.component';
import { TeamFormComponent } from './components/forms/team-form/team-form.component';

import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';

import { TestComponent } from './components/test/test.component';
import { RequestFormTemplateComponent } from './components/form-templates/request-form-template/request-form-template.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { ContactUsPageComponent } from './components/pages/contact-us-page/contact-us-page.component';
import { SettingsPageComponent } from './components/pages/settings-page/settings-page.component';
import { GeneralSettingsTabPageComponent } from './components/pages/settings-page/general-settings-tab-page/general-settings-tab-page.component';
import { AutomatedWorkflowsTabPageComponent } from './components/pages/settings-page/automated-workflows-tab-page/automated-workflows-tab-page.component';
import { ChecklistsTabPageComponent } from './components/pages/settings-page/checklists-tab-page/checklists-tab-page.component';
import { AuthenticationTabPageComponent } from './components/pages/settings-page/authentication-tab-page/authentication-tab-page.component';
import { WebhooksTabPageComponent } from './components/pages/settings-page/webhooks-tab-page/webhooks-tab-page.component';
import { WorkOrderConfigurationTabPageComponent } from './components/pages/settings-page/work-order-configuration-tab-page/work-order-configuration-tab-page.component';
import { AssistantPageComponent } from './components/pages/assistant-page/assistant-page.component';
import { LogAndPlannerPageComponent } from './components/pages/log-and-planner-page/log-and-planner-page.component';
import { WorkOrderFormComponent } from './components/forms/work-order-form/work-order-form.component';
import { MaterialModule } from './imports-module/material/material.module';
import { LoginComponent } from './full-layout-pages/login/login.component';
import { RegisterComponent } from './full-layout-pages/register/register.component';
import { AuthGuard } from './guards/auth.guard';




@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NavbarComponent,

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
    RequestPortalPageComponent,

    PageNotFoundComponent,

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

    TestComponent,

    RequestFormTemplateComponent,

    
    PageTitleComponent,
    TeamFormComponent,
    ContactUsPageComponent,
    SettingsPageComponent,
    GeneralSettingsTabPageComponent,
    AutomatedWorkflowsTabPageComponent,
    ChecklistsTabPageComponent,
    AuthenticationTabPageComponent,
    WebhooksTabPageComponent,
    WorkOrderConfigurationTabPageComponent,
    AssistantPageComponent,
    LogAndPlannerPageComponent,
    WorkOrderFormComponent,
    LoginComponent,
    RegisterComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MaterialModule
  ],
  providers: [
    MatDatepickerModule,
    ApiService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
