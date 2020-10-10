import{Injectable} from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import{Employee} from '../model/employee.model'; 
import{Observable} from 'rxjs';


const httpOptions={
    header: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable
export class EmployeeService{
    constructor(private http:HttpClient){}

    private baseurl='http://localhost:3000';

    getEmployebyUsernamePaswword(employee:Employee):Observable<Employee>{
        return this.http.get<Employee>(this.baseurl+'/v1/CheckLoginDetails');
    }
}