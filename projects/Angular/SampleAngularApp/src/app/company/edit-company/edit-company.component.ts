import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Company } from 'src/app/model/company.model';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.scss']
})
export class EditCompanyComponent implements OnInit {

  company: Company;
  editForm: FormGroup;
  submitted = false;
  public selectedFile;
  imgURL: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private companyService: CompanyService


  ) { }

  ngOnInit(): void {

    const id = localStorage.getItem('editCompanyId');
    if (!id) {
      alert('invalid action')
      this.router.navigate(['company/list-company']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required]
    });
    this.companyService.getCompanyById(+id).subscribe((data) => {

      this.editForm.setValue(data[0]);

      console.log(data);
      this.editForm.setValue({
        id: data.id,
        name: data.name,
        description: data.description,

        image: data.image
        



      });
      this.company = data;
    });
  }

  get f() {
    return this.editForm.controls;
  }
  onSubmit(): any {
    this.submitted = true;

    if (this.editForm.valid) {

      console.log(this.editForm.value);

      this.companyService
        .updateCompany(this.editForm.value)
        .pipe(first())
        .subscribe(
          (data) => {
            this.router.navigate(['company/list-company']);
          },
          (error) => {
            alert(error);
          }
        );
    }
  }
  public onFileChange(event) {
    //console.log(event);
    this.selectedFile = event.target.files[0];
    //this.editForm.get('image').setValue(reader.result);

    // Below part is used to display the selected image
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;

    };

  }

}
