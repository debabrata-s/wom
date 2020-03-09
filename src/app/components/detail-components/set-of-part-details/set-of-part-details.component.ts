import { Component, OnInit } from '@angular/core';
import { DrawerService } from 'src/app/services/drawer.service';
import { MatDialog } from '@angular/material';
import { DeleteSetOfPartDialogComponent } from '../dialog-confirmations/delete-set-of-part-dialog/delete-set-of-part-dialog.component';
import { totalmem } from 'os';
class SetOfPart {
  id: string;
  setName: string;;
  partid: string;
  part_detail: []
}
@Component({
  selector: 'app-set-of-part-details',
  templateUrl: './set-of-part-details.component.html',
  styleUrls: ['./set-of-part-details.component.scss']
})
export class SetOfPartDetailsComponent implements OnInit {
  setOfPart = new SetOfPart();
  parts;
  id;
  constructor(
    private drawerService: DrawerService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.drawerService.getSetOfPart().subscribe((x: any) => {
      this.setOfPart = x
      this.parts = x.part_detail;
      console.log('length: ', x.part_detail)
      
    });
  }
  editSetOfPart() {
    this.drawerService.setDrawer("setOfPartsEditForm");
  }
  deleteSetOfPart(id) {
    const dialogRef = this.dialog.open(DeleteSetOfPartDialogComponent, {
      data: this.setOfPart.id
    })
  }
  getTotalParts(){
    let total = 0
    if (this.parts != null && this.parts.length > 0){
      total =this.parts.length
    }
    
    return total;
  }
  getTotalCost() {
    let total = 0;
    if (this.parts != null && this.parts.length > 0) {
      this.parts.forEach(x => total += x.Cost);
    }
    return total;
  }

}
