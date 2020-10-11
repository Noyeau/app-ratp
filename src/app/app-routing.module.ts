import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DirectComponent } from './components/direct/direct.component';


const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"direct",
    component:DirectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
