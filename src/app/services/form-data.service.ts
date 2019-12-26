import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
x_workOrderCategories=['Category1', 'Category2', 'Category3'];
x_workers=['workera', 'workerb', 'workerc'];
x_teams=['ateam','bteam','cteam'];
x_locations=['loc_a', 'loc_b', 'loc_c'];
x_assets=['a1','a2','a3','a4','a5'];
x_purchaseOrders=['PO1','PO2','PO3','PO4'];
x_repeatingSchedules=['schedule1','schedule2','schedule3']
  constructor() { }

  getWorkOrderCategories(){
    return this.x_workOrderCategories;
  }
  getWorkers(){
    return this.x_workers;
  }
  getTeams(){
    return this.x_teams;
  }
  getLocations(){
    return this.x_locations;
  }
  getAssets(){
    return this.x_assets;
  }
  getPurchaseOrders(){
    return this.x_purchaseOrders;
  }
  getRepeatingSchedules(){
    return this.x_repeatingSchedules
  }
}
