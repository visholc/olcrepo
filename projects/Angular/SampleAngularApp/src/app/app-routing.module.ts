import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HelloComponent } from './hello/hello.component';

const routes: Routes = [


  { path: '',component: HomeComponent },
  { path: 'hello',component: HelloComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
