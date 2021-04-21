import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from '../../service/company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {
  //imageSrc: string;
  addForm: FormGroup;
  submitted = false;
  message: string;
  error: string;
  formdata: FormData;
  //path : string;
  public selectedFile;
  imgURL: any;
  base64Data:any;
  receivedImageData:any;
  convertedImage:any;
  
  constructor(
    
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router,
    private companyService: CompanyService,
  
  ) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      file: ['', Validators.required]

    });
  }

  

  onSubmit(): void {
    console.log(this.addForm.value);
    console.log(this.addForm.valid);
    console.log(this.selectedFile);
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }

 
    if (this.addForm.valid) {
    const  formdata =new FormData();
   // const file = new File[0];
    //formdata.append('myFile',this.addForm.get('file').value);

      formdata.append('file',this.selectedFile,this.selectedFile.name);
     formdata.append('name',this.addForm.get('name').value);
     formdata.append('description',this.addForm.get('description').value);

      this.companyService.addCompany(formdata).subscribe(
        (data) => {
          console.log(data);      
          this.receivedImageData=data;
          this.base64Data=this.receivedImageData.image;
          this.imgURL='data:image;base64,' + this.base64Data;
          this.router.navigate(['company/list-company'], {
            queryParams: { added: true },
          });
        },
        (error) => {
          //**//
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


  public onFileChange(event) {
   //console.log(event);
    this.selectedFile = event.target.files[0];



    // Below part is used to display the selected image
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }


}
