import { Disciplin } from './../model/disciplin.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiZugriffService {

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(): Observable<Disciplin>{
    return this.httpClient.get<Disciplin>("http://10.20.6.26:3000/get-disciplins");
  }
}
