import { Injectable, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FormDataService implements OnInit {
  x_workOrderCategories = [];
  x_workers = [];
  x_teams = [];
  x_locations = [];
  x_assets = [];
  x_purchaseOrders = [];
  x_repeatingSchedules = []

  x_eventData = [
    { id: 1, name: '1some event' },
    { id: 2, name: '2some event' },
    { id: 3, name: '3some event' },
    { id: 4, name: '4some event' },
    { id: 5, name: '5some event' },
    { id: 6, name: '6some event' },
  ]
  constructor(private apiService: ApiService) {}
  ngOnInit() {

  }
  populateLocationForm(){
    return {
      Title: ['tettewr'],
      Address: ['nv'],
      WorkerId: ['vzcx'],
      TeamId: ['vzxc'],
      VendorId: ['vzxc'],
      CustomerId: ['vzxc'],
      ParentLocationId: ['vzxc'],
      customDataArray: [],
      showMapCoordinate: ['vzxc']
    }
  }
  


  getWorkOrderCategories() {
    return this.x_workOrderCategories;
  }
  getWorkers() {
    return this.x_workers;
  }
  getTeams() {
    return this.x_teams;
  }
  getLocations() {
    return this.x_locations;
  }
  getAssets() {
    return this.x_assets;
  }
  getPurchaseOrders() {
    return this.x_purchaseOrders;
  }
  getRepeatingSchedules() {
    return this.x_repeatingSchedules
  }
}
