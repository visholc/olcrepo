import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {

    this.employeeService.getAllEmployee().subscribe((data) => {
      this.employees = data;
      console.log(data);

    });
  }

}
