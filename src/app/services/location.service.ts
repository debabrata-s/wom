import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})

export class LocationService {

  baseUri: string = this.apiService.baseUri;
  headers = this.apiService.headers;
  location: Location;
  constructor(private http: HttpClient, private apiService: ApiService) {}

  setLocation(location) {
    this.location = location;
    console.log('selected location is set to: ',this.location);
    
  }
  getLocation(){
    return this.location;
  }

}