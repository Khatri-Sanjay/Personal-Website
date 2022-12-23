import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ConnectComponent } from './connect/connect.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalaryComponent } from './galary/galary.component';
import { HeaderComponent } from './header/header.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  // {
  //   path: '**', redirectTo: 'dashboard', pathMatch: 'full'
  // },
  {
    path:'header', component:HeaderComponent
  },
  {
    path:'dashboard', component:DashboardComponent
  },
  {
    path: 'resume', component:ResumeComponent
  },
  {
    path: 'project', component:MyProjectComponent
  },
  {
    path: 'contact', component:ContactComponent
  },
  {
    path: 'about', component:AboutComponent
  },
  {
    path: 'galary', component:GalaryComponent
  },
  {
    path: 'connect', component:ConnectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
