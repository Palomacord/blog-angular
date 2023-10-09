import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ArtsComponent } from './pages/arts/arts.component';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent

  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'arts/:id',
    component:ArtsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
