import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPartsService {
  private partlist = new BehaviorSubject([]);
  currentPart = this.partlist.asObservable();

  constructor() { }
  addPart(part) {
    let currentValue = [];
    currentValue = this.partlist.value;

    let updatedValue;
    console.log('includes', currentValue.includes(part));
    if (!(currentValue.includes(part))) {
      updatedValue = [...currentValue, part];
    }
    else{
      console.log('part exists');
      updatedValue = currentValue;
    }

    this.partlist.next(updatedValue);
  }
  getParts() {
    return this.partlist
  }
}
