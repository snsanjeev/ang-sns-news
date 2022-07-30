import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private http: HttpClient) { }

  getManagers() {
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
  
}
