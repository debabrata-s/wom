import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkOrdersPageComponent } from './components/pages/work-orders-page/work-orders-page.component';
import { RequestsPageComponent } from './components/pages/requests-page/requests-page.component';
import { ReportsPageComponent } from './components/pages/reports-page/reports-page.component';
import { SharedWorkOrdersPageComponent } from './components/pages/shared-work-orders-page/shared-work-orders-page.component';
import { LocationsPageComponent } from './components/pages/locations-page/locations-page.component';
import { AssetsPageComponent } from './components/pages/assets-page/assets-page.component';
import { PartsPageComponent } from './components/pages/parts-page/parts-page.component';
import { PurchaseOrdersPageComponent } from './components/pages/purchase-orders-page/purchase-orders-page.component';
import { MetersPageComponent } from './components/pages/meters-page/meters-page.component';
import { PeoplePageComponent } from './components/pages/people-page/people-page.component';
import { VendorsPageComponent } from './components/pages/vendors-page/vendors-page.component';
import { CategoriesPageComponent } from './components/pages/categories-page/categories-page.component';
import { FilesPageComponent } from './components/pages/files-page/files-page.component';
import { WorkOrderRequestFormComponent } from './components/forms/work-order-request-form/work-order-request-form.component';
import { RequestFormComponent } from './components/forms/request-form/request-form.component';
import { LocationFormComponent } from './components/forms/location-form/location-form.component';
import { AssetFormComponent } from './components/forms/asset-form/asset-form.component';
import { PeopleFormComponent } from './components/forms/people-form/people-form.component';
import { VendorFormComponent } from './components/forms/vendor-form/vendor-form.component';
import { CustomerFormComponent } from './components/forms/customer-form/customer-form.component';
import { PartFormComponent } from './components/forms/part-form/part-form.component';
import { PurchaseOrderFormComponent } from './components/forms/purchase-order-form/purchase-order-form.component';
import { MeterFormComponent } from './components/forms/meter-form/meter-form.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { RequestPortalPageComponent } from './components/pages/request-portal-page/request-portal-page.component';
import { RequestFormTemplateComponent } from './components/form-templates/request-form-template/request-form-template.component';
import { TeamFormComponent } from './components/forms/team-form/team-form.component';

import { ContactUsPageComponent } from './components/pages/contact-us-page/contact-us-page.component';
import { SettingsPageComponent } from './components/pages/settings-page/settings-page.component';
import { AuthenticationTabPageComponent } from './components/pages/settings-page/authentication-tab-page/authentication-tab-page.component';
import { AutomatedWorkflowsTabPageComponent } from './components/pages/settings-page/automated-workflows-tab-page/automated-workflows-tab-page.component';
import { ChecklistsTabPageComponent } from './components/pages/settings-page/checklists-tab-page/checklists-tab-page.component';
import { GeneralSettingsTabPageComponent } from './components/pages/settings-page/general-settings-tab-page/general-settings-tab-page.component';
import { WebhooksTabPageComponent } from './components/pages/settings-page/webhooks-tab-page/webhooks-tab-page.component';
import { AssistantPageComponent } from './components/pages/assistant-page/assistant-page.component';
import { LogAndPlannerPageComponent } from './components/pages/log-and-planner-page/log-and-planner-page.component';
import { WorkOrderFormComponent } from './components/forms/work-order-form/work-order-form.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './full-layout-pages/login/login.component';
import { RegisterComponent } from './full-layout-pages/register/register.component';


const routes: Routes = [
  { path: '', redirectTo: '/work-orders', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  {
    path: '', canActivate: [AuthGuard], children: [
      { path: 'work-orders', component: WorkOrdersPageComponent },
      { path: 'reports', component: ReportsPageComponent },
      { path: 'requests', component: RequestsPageComponent },
      { path: 'shared-work-order', component: SharedWorkOrdersPageComponent },
      { path: 'locations', component: LocationsPageComponent },
      { path: 'assets', component: AssetsPageComponent },
      { path: 'parts', component: PartsPageComponent },
      { path: 'purchase-orders', component: PurchaseOrdersPageComponent },
      { path: 'meters', component: MetersPageComponent },
      { path: 'people', component: PeoplePageComponent },
      { path: 'vendors', component: VendorsPageComponent },
      { path: 'categories', component: CategoriesPageComponent },
      { path: 'files', component: FilesPageComponent },
      { path: 'request-portal', component: RequestPortalPageComponent },
      { path: 'assistant', component: AssistantPageComponent },
      { path: 'contact-info', component: ContactUsPageComponent },
      { path: 'maintenance', component: LogAndPlannerPageComponent },
      { path: 'settings', redirectTo: 'settings/general-settings', pathMatch: 'full' },

      { path: 'settings/authentication', component: AuthenticationTabPageComponent },
      { path: 'settings/automated-workflows', component: AutomatedWorkflowsTabPageComponent },
      { path: 'settings/checklists', component: ChecklistsTabPageComponent },
      { path: 'settings/general-settings', component: GeneralSettingsTabPageComponent },
      { path: 'settings/webhooks', component: WebhooksTabPageComponent },
      { path: 'settings/work-order-configuration', component: WorkOrderRequestFormComponent },


      // from component routing
      { path: 'work-orders/work-order-form', component: WorkOrderFormComponent },
      { path: 'requests/request-form', component: RequestFormComponent },
      { path: 'locations/location-form', component: LocationFormComponent },
      { path: 'assets/asset-form', component: AssetFormComponent },
      { path: 'people/people-form', component: PeopleFormComponent },
      { path: 'vendors/vendor-form', component: VendorFormComponent },
      { path: 'vendors/customer-form', component: CustomerFormComponent },
      { path: 'parts/part-form', component: PartFormComponent },
      { path: 'purchase-orders/purchase-order-form', component: PurchaseOrderFormComponent },
      { path: 'meters/meter-form', component: MeterFormComponent },
      { path: 'people/team-form', component: TeamFormComponent },

      { path: 'form-templates/request-form-template', component: RequestFormTemplateComponent }
    ]
  },
  

  // { path: 'settings', component: SettingsPageComponent},
  // { path: 'settings',
  //       children: [
  //           { path: 'authentication', component: AuthenticationTabPageComponent },
  //           { path: 'automated-workflows', component: AutomatedWorkflowsTabPageComponent },
  //           { path: 'checklists', component: ChecklistsTabPageComponent },
  //           { path: 'general-settings', component: GeneralSettingsTabPageComponent },
  //           { path: 'webhooks', component: WebhooksTabPageComponent },
  //           { path: 'work-order-configuration', component: WorkOrderRequestFormComponent},
  //              { path: 'work-request-configuaration', component: WorkRequestConfigurationComponent },
  //       ] },

  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
