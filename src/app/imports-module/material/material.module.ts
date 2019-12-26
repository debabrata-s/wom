import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatOptionModule,
    Material.MatSelectModule,
    Material.MatButtonToggleModule,
    Material.MatSlideToggleModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatIconModule,
    Material.MatFormFieldModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatTabsModule,
    Material.MatButtonModule,
    Material.MatDividerModule
  ],
  exports:[
    Material.MatOptionModule,
    Material.MatSelectModule,
    Material.MatButtonToggleModule,
    Material.MatSlideToggleModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatIconModule,
    Material.MatFormFieldModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatTabsModule,
    Material.MatButtonModule,
    Material.MatDividerModule
  ]
})
export class MaterialModule { }
