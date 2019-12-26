import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-meter-form',
  templateUrl: './meter-form.component.html',
  styleUrls: ['./meter-form.component.scss']
})
export class MeterFormComponent implements OnInit {
  meterForm: FormGroup;
  constructor(private fb: FormBuilder) { }

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
}
