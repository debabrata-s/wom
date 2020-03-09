import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopulateEditFormsService {
  formData = new BehaviorSubject('');
  customData = new BehaviorSubject('');
  constructor() { }
  setFormData(data) {
    // this.formData = data;
    this.formData.next(data);
  }
  setCustomData(data){
    // this.customData = data
    this.customData.next(data)
  }
  getFormData(){
    return this.formData
  }
  getCustomData(){
    return this.customData
  }
}
