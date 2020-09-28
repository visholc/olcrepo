import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';


//anirban code

// Praveen Added some code here

//Again Praveen Added code here

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  addForm: FormGroup;
  submitted = false;
  message: string;
  error: string;
  

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private employeeService: EmployeeService
  ) { }


  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  onSubmit(): void {
    console.log(this.addForm.value);
    console.log(this.addForm.valid);
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    if (this.addForm.valid) {
      this.employeeService.addEmployee(this.addForm.value).subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['employee/list-employee'], {
            queryParams: { added: true },
          });
        },
        (error) => {
          // this.alertService.error(error.errorMessage);
          // this.error = error;
          // this.loading = false;
        }
      );
    }
  }

  get f() {
    return this.addForm.controls;
  }

}
