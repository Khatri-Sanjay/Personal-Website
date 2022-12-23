import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillComponent } from './skill/skill.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { GalaryComponent } from './galary/galary.component';
import { ConnectComponent } from './connect/connect.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    SkillComponent,
    MyProjectComponent,
    ContactComponent,
    HeaderComponent,
    DashboardComponent,
    AboutComponent,
    FooterComponent,
    GalaryComponent,
    ConnectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
