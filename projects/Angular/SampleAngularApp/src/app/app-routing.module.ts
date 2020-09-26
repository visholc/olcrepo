import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  {
    path: 'employee',
    children: [
      {path: 'add-employee', component: AddEmployeeComponent},
      { path: 'edit-employee', component: EditEmployeeComponent },
      { path: 'list-employee', component: ListEmployeeComponent }
    ]
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
