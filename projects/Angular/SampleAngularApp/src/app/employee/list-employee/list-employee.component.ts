import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../model/employee.model';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss'],
})
export class ListEmployeeComponent implements OnInit {

  employees: Employee[] = [];
  pageOfItems: Array<any>;

  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees(): any {
    this.employeeService.getAllEmployee().subscribe((data) => {
      this.employees = data;
    });
  }

  addEmployee(): void {
    this.router.navigate(['employee/add-employee']);
  }

  updateEmployee(employee: Employee): any {
    localStorage.removeItem('editEmployeeId');
    localStorage.setItem('editEmployeeId', employee.id);
    this.router.navigate(['employee/edit-employee']);
  }

  deleteEmployee(employee: Employee): any {
    this.employeeService.deleteEmployee(employee.id).subscribe((data) => {
      this.getAllEmployees();
    });
  }
}