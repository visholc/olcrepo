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


  private baseUrl = "http://localhost:8099";

 // private baseUrl = 'http://localhost:3000';

  getAllEmployee(): any {
    return this.http.get<Employee[]>(this.baseUrl + '/v1/employees');
  }


  getEmployeeById(id: any): Observable<Employee> {
    return this.http.get<Employee>(this.baseUrl + '/v1/employees/' + id);
  }

  deleteEmployee(id: string): any {
    return this.http.delete(this.baseUrl + '/v1/employees/' + id);
  }

  addEmployee(employee: Employee): any {
    return this.http.post(this.baseUrl + '/v1/employees', employee);
  }

  updateEmployee(employee: Employee): any{
    return this.http.put(this.baseUrl + '/v1/employees/' + employee.id, employee);
  }
}
