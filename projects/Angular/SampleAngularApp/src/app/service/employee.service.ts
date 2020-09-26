import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../model/employee.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:8099/olc/api";


  
  getAllEmployee() {
    return this.http.get<Employee[]>(this.baseUrl + '/v1/employees');
  }
}
