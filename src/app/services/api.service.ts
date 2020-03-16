import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { WorkOrder } from '../models/workOrder';
import { AddPeople } from '../models/addPeople';
import { People } from '../models/people';
import { Part } from '../models/part';
import { AddPart } from '../models/addPart';
import { AddLocation } from '../models/addLocation';
import { Team } from '../interfaces/team';
import { TeamPeople } from '../models/teamPeople';
import { AddTeam } from '../models/addTeam';
import { AddTeamPeople } from '../models/addTeamPeople';
import { AddCategory } from '../models/addCategory';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  //mobwom.net
  //162.144.32.17
  baseUri: string = 'http://mobwom.net/webapi/user/api/v1';
  headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  constructor(private http: HttpClient) {

  }

  test(): Observable<any> {
    return this.http.get(`${this.baseUri}/getallteampeople`).pipe(catchError(this.errorMgmt))
  }
  //-----------------------------------------      WORK ORDER         -------------------------------------------

  // Create
  createWorkOrderRequest(data): Observable<any> {
    let url = `${this.baseUri}/workorder`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all workOrderRequests
  getWorkOrderRequests(): Observable<any> {
    return this.http.get(`${this.baseUri}/getallworkorder`)
  }

  // Get workOrderRequest
  getWorkOrderRequest(id): Observable<any> {
    let url = `${this.baseUri}/workorder/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Update workOrderRequest
  updateWorkOrderRequest(id, data: WorkOrder): Observable<any> {
    let url = `${this.baseUri}/workorder/${id}/edit`;
    return this.http.post(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete workOrderRequest
  deleteWorkOrderRequest(id): Observable<any> {
    let url = `${this.baseUri}/workorder/${id}/delete`;
    return this.http.get(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }
  //------------------------------------------------------------------------------------------------------

  //------------------------------------       PEOPLE           ------------------------------------------

  // Create
  addPeople(data: AddPeople): Observable<any> {
    let url = `${this.baseUri}/people`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all people
  getAllPeople() {
    return this.http.get(`${this.baseUri}/getallpeople`);
  }

  // Get person
  getPeople(id): Observable<any> {
    let url = `${this.baseUri}/people/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Update person
  updatePeople(id, data: People): Observable<any> {
    let url = `${this.baseUri}/people/${id}/edit`;
    return this.http.post(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete person
  deletePeople(id): Observable<any> {
    let url = `${this.baseUri}/people/${id}/delete`;
    return this.http.get(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }
  //------------------------------------------------------------------------------------------------------

  //--------------------------------------        PART        --------------------------------------------
  // Create
  addPart(data: AddPart): Observable<any> {
    let url = `${this.baseUri}/part`;
    const formData = new FormData();

    formData.append("Title", data.Title)
    formData.append("Description", data.Description)
    formData.append("Category", data.Category)
    formData.append("Cost", data.Cost.toString())
    formData.append("Quantity", data.Quantity.toString())
    if (data.MinimumQuantity) {
      formData.append("MinimumQuantity", data.MinimumQuantity.toString())
      console.log('tretr');
    } else {
      formData.append("MinimumQuantity", "0")
      console.log('fahds');
    }
    formData.append("Barcode", data.Barcode)
    formData.append("Area", data.Area)
    formData.append("AdditionalPartDetails", data.AdditionalPartDetails)
    formData.append("WorkerId", data.WorkerId.toString())
    formData.append("TeamId", data.TeamId.toString())
    formData.append("VendorId", data.VendorId.toString())
    formData.append("CustomerId", data.CustomerId.toString())
    formData.append("LocationId", data.LocationId.toString())
    formData.append("Nonstock", data.Nonstock)
   
    return this.http.post(url, formData)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all part
  getAllParts() {
    return this.http.get(`${this.baseUri}/getallpart`);
  }

  // Get part
  getPart(id): Observable<any> {
    let url = `${this.baseUri}/part/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Update part
  updatePart(id, data: AddPart): Observable<any> {
    let url = `${this.baseUri}/part/${id}/edit`;
    const formData = new FormData();

    formData.append("Title", data.Title)
    formData.append("Description", data.Description)
    formData.append("Category", data.Category)
    formData.append("Cost", data.Cost.toString())
    formData.append("Quantity", data.Quantity.toString())
    formData.append("MinimumQuantity", data.MinimumQuantity.toString())
    formData.append("Barcode", data.Barcode)
    formData.append("Area", data.Area)
    formData.append("AdditionalPartDetails", data.AdditionalPartDetails)
    formData.append("WorkerId", data.WorkerId.toString())
    formData.append("TeamId", data.TeamId.toString())
    formData.append("VendorId", data.VendorId.toString())
    formData.append("CustomerId", data.CustomerId.toString())
    formData.append("LocationId", data.LocationId.toString())
    formData.append("Nonstock", this.getNonStock(data.Nonstock).toString())

    return this.http.post(url, formData).pipe(
      catchError(this.errorMgmt)
    )
  }
  getNonStock(data) {
    if (data) {
      return 1;
    }
    else
      return 0;
  }
  addCustomPartData(id, data) {
    let url = `${this.baseUri}/partcustomdata`;
    const formData = new FormData();
    formData.append("PartId", id)
    formData.append("CustomDataName", data.CustomDataName)
    formData.append("CustomDataValue", data.CustomDataValue)
    formData.append("CustomDataUnit", data.CustomDataUnit)

    return this.http.post(url, formData)
      .pipe(
        catchError(this.errorMgmt)
      )
  }
  getCustomPartData(id) {
    let url = `${this.baseUri}/getpartwisecustomdata/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }
  updateCustomPartData(id, data) {
    let url = `${this.baseUri}/partcustomdata/${id}/edit`;
    const formData = new FormData();
    formData.append("PartId", data.PartId)
    formData.append("CustomDataName", data.CustomDataName)
    formData.append("CustomDataValue", data.CustomDataValue)
    formData.append("CustomDataUnit", data.CustomDataUnit)

    return this.http.post(url, formData)
      .pipe(
        catchError(this.errorMgmt)
      )
  }
  deleteCustomPartData(id) {
    let url = `${this.baseUri}/partcustomdata/${id}/delete`;
    return this.http.get(url).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete part
  deletePart(id): Observable<any> {
    let url = `${this.baseUri}/part/${id}/delete`;
    console.log(url);
    return this.http.get(url).pipe(
      catchError(this.errorMgmt)
    )
  }

  addPartFile(id, data): Observable<any> {
    let url = `${this.baseUri}/addpartfile`;
    const formData = new FormData();
    formData.append("PartId", id)

    for (let i = 0; i < data.length; i++) {
      formData.append(`file[${i}]`, data[i]);
      console.log('data: ', data[i]);
    }
    return this.http.post(url, formData)
      .pipe(
        catchError(this.errorMgmt)
      )
  }
  getPartFiles(id) {
    let url = `${this.baseUri}/addpartfile/${id}/getpartwisefile`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }
  removePartFile(id): Observable<any> {
    let url = `${this.baseUri}/addpartfile/${id}/partfiledelete`;
    console.log(url);
    return this.http.get(url).pipe(
      catchError(this.errorMgmt)
    )
  }
  removeAllPartFile(id): Observable<any> {
    let url = `${this.baseUri}/addpartfile/${id}/partwisefiledelete`;
    console.log(url);
    return this.http.get(url).pipe(
      catchError(this.errorMgmt)
    )
  }
  getPartAssets(id) {
    let url = `${this.baseUri}/getpartwiseasset/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }
  addPartAsset(assetId, partId) {
    let url = `${this.baseUri}/addpart`;
    const formData = new FormData();
    formData.append("AssetId", assetId)
    formData.append("Parts[0]", partId)
    return this.http.post(url, formData)
      .pipe(
        catchError(this.errorMgmt)
      )
  }
  //----------------------------------------------------------------------------------------------------

  //--------------------------------------        SET OF PARTS       ---------------------------------------
  getAllSetOfParts() {
    return this.http.get(`${this.baseUri}/getallsetofpart`);
  }
  addSetOfParts(data): Observable<any> {
    let url = `${this.baseUri}/setofpart`;
    const formData = new FormData();

    formData.append("setName", data.setName)
    for (let i = 0; i < data.PartId.length; i++) {
      formData.append(`PartId[${i}]`, data.PartId[i])
    }
    console.log(formData);

    return this.http.post(url, formData).pipe(
      catchError(this.errorMgmt)
    )
  }
  // https://mobwom.net/webapi/user/api/v1/getsetofpartedit/{id}/edit
  updateSetOfParts(id, data) {
    let url = `${this.baseUri}/getsetofpartedit/${id}/edit`;
    const formData = new FormData();
    formData.append("setName", data.setName)
    for (let i = 0; i < data.PartId.length; i++) {
      formData.append(`PartId[${i}]`, data.PartId[i])
    }
    return this.http.post(url, formData).pipe(
      catchError(this.errorMgmt)
    )
  }
  getSetOfPart(id) {
    let url = `${this.baseUri}/getsetofpartedit/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }
  deleteSetOfPart(id) {
    let url = `${this.baseUri}/setofpart/${id}/delete`;
    console.log(url);
    return this.http.get(url).pipe(
      catchError(this.errorMgmt)
    )
  }
  //----------------------------------------------------------------------------------------------------

  //--------------------------------------        USERS       ---------------------------------------

  getAllUsers() {
    return this.http.get(`${this.baseUri}/user`);
  }
  //----------------------------------------------------------------------------------------------------

  //--------------------------------------        CUSTOMER       ---------------------------------------

  getAllCustomers() {
    return this.http.get(`${this.baseUri}/getallcustomer`);
  }
  //----------------------------------------------------------------------------------------------------

  //--------------------------------------        LOCATION       ---------------------------------------
  // Create
  addLocation(data: AddLocation): Observable<any> {
    let url = `${this.baseUri}/location`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all location
  getAllLocation() {
    return this.http.get(`${this.baseUri}/getalllocation`);
  }

  // Get person
  getLocation(id): Observable<any> {
    let url = `${this.baseUri}/location/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Update location
  updateLocation(id, data: Location): Observable<any> {
    let url = `${this.baseUri}/location/${id}/edit`;
    return this.http.post(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete location
  deleteLocation(id): Observable<any> {
    let url = `${this.baseUri}/location/${id}/delete`;
    return this.http.get(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }
  //---------------------------------------------------------------------------------------------------

  //--------------------------------------        TEAM       ------------------------------------------
  // Create
  addTeam(data: AddTeam): Observable<any> {
    let url = `${this.baseUri}/team`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all team
  getAllTeam() {
    return this.http.get(`${this.baseUri}/getallteam`);
  }

  // Get person
  getTeam(id): Observable<any> {
    let url = `${this.baseUri}/team/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Update team
  updateTeam(id, data: Team): Observable<any> {
    let url = `${this.baseUri}/team/${id}/edit`;
    return this.http.post(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete team
  deleteTeam(id): Observable<any> {
    let url = `${this.baseUri}/team/${id}/delete`;
    return this.http.get(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }
  //------------------------------------------------------------------------------------------------------

  //--------------------------------------        TEAM PEOPLE      ---------------------------------------

  // Create
  addTeamPeople(data: AddTeamPeople): Observable<any> {
    let url = `${this.baseUri}/teampeople`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all team people
  getAllTeamPeople() {
    return this.http.get(`${this.baseUri}/getallteampeople`);
  }

  // Get team people
  getTeamPeople(id): Observable<any> {
    let url = `${this.baseUri}/teampeople/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Update team people
  updateTeamPeople(id, data: TeamPeople): Observable<any> {
    let url = `${this.baseUri}/teampeople/${id}/edit`;
    return this.http.post(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete team people
  deleteTeamPeople(id): Observable<any> {
    let url = `${this.baseUri}/teampeople/${id}/delete`;
    return this.http.get(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }
  //------------------------------------------------------------------------------------------------------

  //--------------------------------------        CATEGORY      ------------------------------------------
  // Create
  addCategory(data: AddCategory): Observable<any> {
    let url = `${this.baseUri}/categories`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all category people
  getAllCategories() {
    return this.http.get(`${this.baseUri}/getallcategory`);
  }

  // Get category people
  getCategory(id): Observable<any> {
    let url = `${this.baseUri}/category/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Update category people
  updateCategory(id, data: Category): Observable<any> {
    let url = `${this.baseUri}/categories/${id}/edit`;
    return this.http.post(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete category people
  deleteCategory(id): Observable<any> {
    let url = `${this.baseUri}/categories/${id}/delete`;
    return this.http.get(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }
  //------------------------------------------------------------------------------------------------------

  //---------------------------        SHARED WORK ORDER (WORK ORDER TASK)    ----------------------------
  // Create
  addWorkOrderTask(data: AddCategory): Observable<any> {
    let url = `${this.baseUri}/workorder`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all category people
  getAllWorkOrderTask() {
    return this.http.get(`${this.baseUri}/getallworkordertask`);
  }

  // Get category people
  getWorkOrderTask(id): Observable<any> {
    let url = `${this.baseUri}/workordertask/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Update category people
  updateWorkOrderTasky(id, data: Category): Observable<any> {
    let url = `${this.baseUri}/workordertask/${id}/edit`;
    return this.http.post(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete category people
  deleteWorkOrderTask(id): Observable<any> {
    let url = `${this.baseUri}/workordertask/${id}/delete`;
    return this.http.get(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  //------------------------------------------------------------------------------------------------------

  //--------------------------------------        METERS            --------------------------------------

  //------------------------------------------------------------------------------------------------------

  //--------------------------------------        ASSETS            --------------------------------------
  getAllAsset() {
    return this.http.get(`${this.baseUri}/getallasset`);
  }
  getAsset(id) {
    let url = `${this.baseUri}/asset/${id}`;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }
  //------------------------------------------------------------------------------------------------------

  //--------------------------------------        VENDORS            --------------------------------------
  getAllVendor() {
    return this.http.get(`${this.baseUri}/getallvendor`);
  }
  //------------------------------------------------------------------------------------------------------


  //------------------------------------------------------------------------------------------------------
  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}