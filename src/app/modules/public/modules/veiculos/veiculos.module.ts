import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeiculosRoutingModule } from './veiculos-routing.module';
import { CadastrarVeiculoComponent } from './pages/cadastrar-veiculo/cadastrar-veiculo.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VeiculoService } from './services/veiculo.service';






@NgModule({
  declarations: [CadastrarVeiculoComponent],
  imports: [
    CommonModule,
    VeiculosRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],

  providers: [
    VeiculoService
  ]
})
export class VeiculosModule {

 }
