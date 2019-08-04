import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultasRoutingModule } from './multas-routing.module';
import { MultasComponent } from './pages/multas/multas.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MultasServiceService } from './services/multas-service.service';
import { GerarMultaComponent } from './pages/gerar-multa/gerar-multa.component';



@NgModule({
  declarations: [MultasComponent, GerarMultaComponent],
  imports: [
    CommonModule,
    MultasRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    MultasServiceService
  ]
})
export class MultasModule { }
