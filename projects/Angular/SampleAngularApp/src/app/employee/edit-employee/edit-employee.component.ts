import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Employee } from '../../model/employee.model';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss'],
})
export class EditEmployeeComponent implements OnInit {
  employee: Employee;
  editForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    const id = localStorage.getItem('editEmployeeId');
    if (!id) {
      alert('Invalid action');
      this.router.navigate(['employee/list-employee']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
    });
    this.employeeService.getEmployeeById(+id).subscribe((data) => {
      // Set for all
      //  this.editForm.setValue(data[0]);
      //  set individual
      //console.log(data);
      this.editForm.setValue({
        id: data.id,
        name: data.name,
      });
      this.employee = data;
    });
  }


  get f() {
    return this.editForm.controls;
  }

  // public handleError = (controlName: string, errorName: string) => {
  //   return this.editForm.controls[controlName].hasError(errorName);
  // }

  // changeSuit(e) {
  //   this.editForm.get('type').setValue(e.target.value, {
  //     onlySelf: true,
  //   });
  // }

  onSubmit(): any {
    this.submitted = true;

     

    if (this.editForm.valid) {

      console.log(this.editForm.value);

      this.employeeService
        .updateEmployee(this.editForm.value)
        .pipe(first())
        .subscribe(
          (data) => {
            this.router.navigate(['employee/list-employee']);
          },
          (error) => {
            alert(error);
          }
        );
    }
  }
}
