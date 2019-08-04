import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Veiculo } from '../model/veiculo.interface';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable()
export class VeiculoService {


  constructor(private httpService: HttpClient, private router: Router) { }

  cadastrarVeiculo(veiculoForm: Veiculo){
    console.log(veiculoForm)
    return this.httpService.post(`http://localhost:8080/detran-backend/api/v1/veiculos`, veiculoForm).pipe(

      catchError(err => {
        return throwError(err)

      }));
  }
}
