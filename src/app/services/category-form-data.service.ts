import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
interface data{
  category:string,
  tab:string
}
@Injectable({
  providedIn: 'root'
})
export class CategoryFormDataService {
  workOrderCategories = [];
  assetStatus = [];
  purchaseOrders = [];
  meters = [];
  
  // viewMode:string;
  
  categorySubject = new BehaviorSubject<string>(null);
  viewMode$ = this.categorySubject.asObservable();
  constructor() { }
  
  
}
