import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MatDatepickerModule, MatNativeDateModule, MatIconModule, MatFormFieldModule, MatInputModule, MatTabsModule } from '@angular/material';

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

import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { NgxFileDropModule } from 'ngx-file-drop';
import { CategoryFormComponent } from './components/forms/category-form/category-form.component';
import { LoginComponent } from './components/full-layout-pages/login/login.component';
import { RegisterComponent } from './components/full-layout-pages/register/register.component';
import { DataTableComponent } from './components/test/data-table/data-table.component';
import { TeamEditFormComponent } from './components/forms/team-form/team-edit-form.component';
import { ProfilePageComponent } from './components/pages/profile-page/profile-page.component';
import { ProfileEditFormComponent } from './components/forms/profile-edit-form/profile-edit-form.component';
import { ChangePasswordFormComponent } from './components/forms/change-password-form/change-password-form.component';
import { TimeZones } from './services/timezones';
import { WebhookFormComponent } from './components/forms/webhook-form/webhook-form.component';
import { ChecklistFormTemplateComponent } from './components/form-templates/checklist-form-template/checklist-form-template.component';
import { ConfigureSamlFormComponent } from './components/forms/configure-saml-form/configure-saml-form.component';
import { AssetsImportComponent } from './components/pages/assets-import/assets-import.component';
import { AssetsUpdateComponent } from './components/pages/assets-update/assets-update.component';
import { ManageTemplatesComponent } from './components/pages/manage-templates/manage-templates.component';
import { AssetTemplatesComponent } from './components/forms/asset-templates/asset-templates.component';
import { ImportPageComponent } from './components/pages/import-page/import-page.component';
import { AgmCoreModule } from '@agm/core';
import { PartsImportComponent } from './components/pages/parts-import/parts-import.component';
import { PartsUpdateComponent } from './components/pages/parts-update/parts-update.component';
import { LocationImportComponent } from './components/pages/location-import/location-import.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { MetersImportComponent } from './components/pages/meters-import/meters-import.component';
import { PeopleImportComponent } from './components/pages/people-import/people-import.component';
import { VendorsImportComponent } from './components/pages/vendors-import/vendors-import.component';
import { PasswordResetPageComponent } from './components/full-layout-pages/password-reset-page/password-reset-page.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { WorkOrderFilterComponent } from './components/filter-components/work-order-filter/work-order-filter.component';
import { WorkOrderDetailsComponent } from './components/detail-components/work-order-details/work-order-details.component';
import { PartDialogFormComponent } from './components/detail-components/dialog-forms/part-dialog-form/part-dialog-form.component';
import { AdditionalCostDialogFormComponent } from './components/detail-components/dialog-forms/additional-cost-dialog-form/additional-cost-dialog-form.component';
import { AddFilesDialogFormComponent } from './components/detail-components/dialog-forms/add-files-dialog-form/add-files-dialog-form.component';
import { WorkOrderEditFormComponent } from './components/test/work-order-edit-form/work-order-edit-form.component';
import { DeleteUserDialogComponent } from './components/detail-components/dialog-confirmations/delete-user-dialog/delete-user-dialog.component';
import { DeleteWorkOrderDialogComponent } from './components/detail-components/dialog-confirmations/delete-work-order-dialog/delete-work-order-dialog.component';
import { FloorPlanDialogFormComponent } from './components/detail-components/dialog-forms/floor-plan-dialog-form/floor-plan-dialog-form.component';
import { DeleteLocationDialogComponent } from './components/detail-components/dialog-confirmations/delete-location-dialog/delete-location-dialog.component';
import { MapComponent } from './components/map/map.component';
import { LocationEditFormComponent } from './components/test/location-edit-form/location-edit-form.component';
import { DeleteCategoryDialogComponent } from './components/detail-components/dialog-confirmations/delete-category-dialog/delete-category-dialog.component';
import { AssetDetailsComponent } from './components/detail-components/asset-details/asset-details.component';
import { AddDowntimeDialogComponent } from './components/detail-components/dialog-forms/add-downtime-dialog/add-downtime-dialog.component';
import { AssetFilterComponent } from './components/filter-components/asset-filter/asset-filter.component';
import { DeleteAssetDialogComponent } from './components/detail-components/dialog-confirmations/delete-asset-dialog/delete-asset-dialog.component';
import { AddReadingDialogComponent } from './components/detail-components/dialog-forms/add-reading-dialog/add-reading-dialog.component';
import { InventoryPageComponent } from './components/pages/inventory-page/inventory-page.component';
import { SetOfPartsPageComponent } from './components/pages/inventory-page/set-of-parts-page/set-of-parts-page.component';
import { PartsPageComponent } from './components/pages/inventory-page/parts-page/parts-page.component';
import { SetOfPartsFormComponent } from './components/forms/set-of-parts-form/set-of-parts-form.component';
import { PartsFilterComponent } from './components/filter-components/parts-filter/parts-filter.component';
import { PartDetailsComponent } from './components/detail-components/part-details/part-details.component';
import { DeletePartDialogComponent } from './components/detail-components/dialog-confirmations/delete-part-dialog/delete-part-dialog.component';
import { AddAssetDialogComponent } from './components/detail-components/dialog-forms/add-asset-dialog/add-asset-dialog.component';
import { SetOfPartDetailsComponent } from './components/detail-components/set-of-part-details/set-of-part-details.component';
import { SelectFileDialogComponent } from './components/detail-components/dialog-forms/select-file-dialog/select-file-dialog.component';
import { RestockDialogComponent } from './components/detail-components/dialog-forms/restock-dialog/restock-dialog.component';
import { RequestFilterComponent } from './components/filter-components/request-filter/request-filter.component';
import { PurchaseOrderPdfFormComponent } from './components/forms/purchase-order-pdf-form/purchase-order-pdf-form.component';
import { RequestEditFormComponent } from './components/forms/request-edit-form/request-edit-form.component';
import { SelectChecklistDialogComponent } from './components/detail-components/dialog-forms/select-checklist-dialog/select-checklist-dialog.component';
import { PurchaseOrderFilterComponent } from './components/filter-components/purchase-order-filter/purchase-order-filter.component';
import { PurchaseOrderDetailsComponent } from './components/detail-components/purchase-order-details/purchase-order-details.component';
import { DeletePurchaseOrderDialogComponent } from './components/detail-components/dialog-confirmations/delete-purchase-order-dialog/delete-purchase-order-dialog.component';
import { SelectPartDialogComponent } from './components/detail-components/dialog-forms/select-part-dialog/select-part-dialog.component';
import { FulfillPurchaseOrderDialogComponent } from './components/detail-components/dialog-forms/fulfill-purchase-order-dialog/fulfill-purchase-order-dialog.component';
import { RenameFileDialogFormComponent } from './components/detail-components/dialog-forms/rename-file-dialog-form/rename-file-dialog-form.component';
import { DeleteFileDialogComponent } from './components/detail-components/dialog-confirmations/delete-file-dialog/delete-file-dialog.component';
import { MeterFilterComponent } from './components/filter-components/meter-filter/meter-filter.component';
import { MeterDetailsComponent } from './components/detail-components/meter-details/meter-details.component';
import { WorkOrderTriggerFormComponent } from './components/forms/work-order-trigger-form/work-order-trigger-form.component';
import { SelectPurchaseOrderDialogComponent } from './components/detail-components/dialog-forms/select-purchase-order-dialog/select-purchase-order-dialog.component';
import { DeleteMeterDialogComponent } from './components/detail-components/dialog-confirmations/delete-meter-dialog/delete-meter-dialog.component';
import { LeaderboardPageComponent } from './components/pages/reports-page/leaderboard-page/leaderboard-page.component';
import { KpiDashboardPageComponent } from './components/pages/reports-page/kpi-dashboard-page/kpi-dashboard-page.component';
import { DashboardPageComponent } from './components/pages/reports-page/dashboard-page/dashboard-page.component';
import { RatingsPageComponent } from './components/pages/reports-page/ratings-page/ratings-page.component';

import { ChartsModule } from 'ng2-charts';
import { AddTimeDialogFormComponent } from './components/detail-components/dialog-forms/add-time-dialog-form/add-time-dialog-form.component';
import { ChangeTimerCategoryDialogComponent } from './components/detail-components/dialog-forms/change-timer-category-dialog/change-timer-category-dialog.component';
import { RechartsHalfDoughnutComponent } from './components/test/recharts-half-doughnut/recharts-half-doughnut.component';
import { DashboardStatsPageComponent } from './components/pages/reports-page/dashboard-page/dashboard-stats-page/dashboard-stats-page.component';
import { PartEditFormComponent } from './components/forms/part-edit-form/part-edit-form.component';
import { ToastrModule } from 'ngx-toastr';
import { DeleteSetOfPartDialogComponent } from './components/detail-components/dialog-confirmations/delete-set-of-part-dialog/delete-set-of-part-dialog.component';
import { SetOfPartsEditFormComponent } from './components/forms/set-of-parts-edit-form/set-of-parts-edit-form.component';


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
    CategoryFormComponent,

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
    RegisterComponent,
    PageNotFoundComponent,
    DataTableComponent,
    TeamEditFormComponent,
    ProfilePageComponent,
    ProfileEditFormComponent,
    ChangePasswordFormComponent,
    WebhookFormComponent,
    ChecklistFormTemplateComponent,
    ConfigureSamlFormComponent,
    AssetsUpdateComponent,
    AssetsImportComponent,
    ManageTemplatesComponent,
    AssetTemplatesComponent,
    ImportPageComponent,
    PartsImportComponent,
    PartsUpdateComponent,
    LocationImportComponent,
    FaqComponent,
    MetersImportComponent,
    PeopleImportComponent,
    VendorsImportComponent,

    PasswordResetPageComponent,
    WorkOrderFilterComponent,
    WorkOrderDetailsComponent,
    PartDialogFormComponent,
    AdditionalCostDialogFormComponent,
    AddFilesDialogFormComponent,
    WorkOrderEditFormComponent,
    DeleteUserDialogComponent,
    DeleteWorkOrderDialogComponent,
    FloorPlanDialogFormComponent,
    DeleteLocationDialogComponent,
    MapComponent,
    LocationEditFormComponent,
    DeleteCategoryDialogComponent,
    AssetDetailsComponent,
    AddDowntimeDialogComponent,
    AssetFilterComponent,
    DeleteAssetDialogComponent,
    AddReadingDialogComponent,
    InventoryPageComponent,
    SetOfPartsPageComponent,
    SetOfPartsFormComponent,
    PartsFilterComponent,
    PartDetailsComponent,
    DeletePartDialogComponent,
    AddAssetDialogComponent,
    SetOfPartDetailsComponent,
    SelectFileDialogComponent,
    RestockDialogComponent,
    RequestFilterComponent,
    PurchaseOrderPdfFormComponent,
    RequestEditFormComponent,
    SelectChecklistDialogComponent,
    PurchaseOrderFilterComponent,
    PurchaseOrderDetailsComponent,
    DeletePurchaseOrderDialogComponent,
    SelectPartDialogComponent,
    FulfillPurchaseOrderDialogComponent,
    RenameFileDialogFormComponent,
    DeleteFileDialogComponent,
    MeterFilterComponent,
    MeterDetailsComponent,
    WorkOrderTriggerFormComponent,
    SelectPurchaseOrderDialogComponent,
    DeleteMeterDialogComponent,
    LeaderboardPageComponent,
    KpiDashboardPageComponent,
    DashboardPageComponent,
    RatingsPageComponent,
    AddTimeDialogFormComponent,
    ChangeTimerCategoryDialogComponent,
    RechartsHalfDoughnutComponent,
    DashboardStatsPageComponent,
    PartEditFormComponent,
    DeleteSetOfPartDialogComponent,
    SetOfPartsEditFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxDaterangepickerMd.forRoot(),
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MaterialModule,
    NgxFileDropModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [
    MatDatepickerModule,
    ApiService,
    AuthGuard,
    TimeZones
  ],
  entryComponents: [
    CustomReportFormComponent,
    CategoryFormComponent,
    TeamEditFormComponent,
    WebhookFormComponent,
    ConfigureSamlFormComponent,
    PartDialogFormComponent,
    AdditionalCostDialogFormComponent,
    AddFilesDialogFormComponent,
    DeleteUserDialogComponent,
    DeleteWorkOrderDialogComponent,
    FloorPlanDialogFormComponent,
    DeleteLocationDialogComponent,
    DeleteCategoryDialogComponent,
    AssetDetailsComponent,
    AddDowntimeDialogComponent,
    DeleteAssetDialogComponent,
    AddReadingDialogComponent,
    PartDetailsComponent,
    DeletePartDialogComponent,
    AddAssetDialogComponent,
    SelectFileDialogComponent,
    RestockDialogComponent,
    SelectChecklistDialogComponent,
    PurchaseOrderDetailsComponent,
    DeletePurchaseOrderDialogComponent,
    SelectPartDialogComponent,
    FulfillPurchaseOrderDialogComponent,
    RenameFileDialogFormComponent,
    DeleteFileDialogComponent,
    SelectPurchaseOrderDialogComponent,
    DeleteMeterDialogComponent,
    AddTimeDialogFormComponent,
    ChangeTimerCategoryDialogComponent,
    DeleteSetOfPartDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
