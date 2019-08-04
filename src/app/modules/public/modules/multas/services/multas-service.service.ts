import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, pipe, of, throwError } from 'rxjs';
import { map, catchError ,} from 'rxjs/operators';


@Injectable()
export class MultasServiceService {

  multasEnum = {
    multasEnum: String
  }
  constructor(private httpService: HttpClient,
    // private router :Router
  ) { }

  buscarMultas(placa: any): Observable<any[]> {
    return this.httpService.get<any[]>(`http://localhost:8080/detran-backend/api/v1/multas/${placa}`)
  }
  multarVeiculo(placa, tipo): Observable<any> {
    this.multasEnum.multasEnum = tipo;
    return this.httpService.post(`http://localhost:8080/detran-backend/api/v1/multas/${placa}`,
    this.multasEnum).pipe(

      catchError(err => {
        return throwError(err)
      })

    );
  }
}
