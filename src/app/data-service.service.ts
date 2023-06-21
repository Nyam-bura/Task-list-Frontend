import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  http: any;

  constructor(private httpClient: HttpClient) {}

  getdata() {
    return this.httpClient.get('http://127.0.0.1:8000/api/task/');
  }
}
