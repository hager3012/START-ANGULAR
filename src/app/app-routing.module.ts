import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CONTACTComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PORTFOLIOComponent } from './portfolio/portfolio.component';
import { NotfoundComponent } from './notfound/notfound.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'PORTFOLIO',component:PORTFOLIOComponent},
  {path:'ABOUT',component:AboutComponent},
  {path:'CONTACT',component:CONTACTComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  

exports: [RouterModule]
})
export class AppRoutingModule { }
