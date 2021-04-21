import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Company } from '../../model/company.model';
import { CompanyService } from '../../service/company.service';

@Component({
  selector: 'list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.scss'],
})
export class ListCompanyComponent implements OnInit {

  companys: Company[] = [];
  pageOfItems: Array<any>;

  constructor(
    private router: Router,
    private companyService: CompanyService
    
  ) { }

  ngOnInit(): void {
    this.getAllCompanys();
  }

  getAllCompanys(): any {
    this.companyService.getAllCompany().subscribe((data) => {
      this.companys = data;
    });
  }

  addCompany(): void {
    this.router.navigate(['company/add-company']);
  }

  updateCompany(company: Company): any {
    localStorage.removeItem('editCompanyId');
    localStorage.setItem('editCompanyId', company.id);
    this.router.navigate(['company/edit-company']);
  }

  deleteCompany(company: Company): any {
    this.companyService.deleteCompany(company.id).subscribe((data) => {
      this.getAllCompanys();
    });
  }
}