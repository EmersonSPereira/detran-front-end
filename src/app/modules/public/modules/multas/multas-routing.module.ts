import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultasComponent } from './pages/multas/multas.component';
import { GerarMultaComponent } from './pages/gerar-multa/gerar-multa.component';


const routes: Routes = [

  { path: "", component: MultasComponent },
  { path: "gerar-multas", component: GerarMultaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultasRoutingModule { }
