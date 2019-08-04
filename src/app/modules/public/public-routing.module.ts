import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },

  { path: "multas",  loadChildren: "./modules/multas/multas.module#MultasModule" },
  { path: "veiculos",  loadChildren: "./modules/veiculos/veiculos.module#VeiculosModule" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
