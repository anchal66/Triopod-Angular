import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './services/details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './contact.service';
import { ApplyComponent } from './careers/apply/apply.component';
import { CareerService } from './career.service';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'aboutus',component:AboutComponent},
  {path:'services',component:ServicesComponent},
  {path:'contactus',component:ContactComponent},
  {path:'careers',component:CareersComponent},
  {path:'services/details',component:DetailsComponent},
  {path:'careers/apply',component:ApplyComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    CareersComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    DetailsComponent,
    ApplyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [ContactService, CareerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
