import { Component, OnInit } from '@angular/core';
import { DrawerService } from 'src/app/services/drawer.service';
import { MatDialog } from '@angular/material';
import { DeleteMeterDialogComponent } from '../dialog-confirmations/delete-meter-dialog/delete-meter-dialog.component';

@Component({
  selector: 'app-meter-details',
  templateUrl: './meter-details.component.html',
  styleUrls: ['./meter-details.component.scss']
})
export class MeterDetailsComponent implements OnInit {

  constructor(private drawerService: DrawerService, private dialog: MatDialog) { }

  ngOnInit() {
  }
  addWorkOrderTrigger() {
    this.drawerService.setDrawer('workOrderTriggerForm');
  }
  editMeter() {
    this.drawerService.setDrawer('meterForm');
  }
  deleteMeter() {
    this.dialog.open(DeleteMeterDialogComponent)
  }
}
