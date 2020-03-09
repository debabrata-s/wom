import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DrawerService } from 'src/app/services/drawer.service';

@Component({
  selector: 'app-meter-form',
  templateUrl: './meter-form.component.html',
  styleUrls: ['./meter-form.component.scss']
})
export class MeterFormComponent implements OnInit {
  meterForm: FormGroup;
  workers = ['w1','w2','w3','w4','w5'];
  assets = ['a1','a2','a3','a4','a5'];
  constructor(private fb: FormBuilder,private router: Router, public drawerService: DrawerService) { }

  ngOnInit() {
    this.meterForm = this.fb.group({
      title:[''],
      uom:[''],
      upgradeFrequency:[''],
      category:[''],
      image:[''],
      workers:[''],
      asset:['']
    });
  }
  onSubmit() {
    console.log(this.meterForm);
    console.log('Saved: ' + JSON.stringify(this.meterForm.value));
  }
  manageCategories(){
    this.drawerService.toggleStatus();
    this.router.navigate(['/categories']);
  }
  closeDrawer() {
    this.drawerService.toggleStatus();
  }
}
