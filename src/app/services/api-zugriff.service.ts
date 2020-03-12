import { Disciplin } from './../model/disciplin.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiZugriffService {

  url = /*"http://10.20.6.26:3000"*/ "http://localhost:3000";
  constructor(private httpClient: HttpClient) { }

  public sendGetDisciplin(): Observable<Disciplin>{
    return this.httpClient.get<Disciplin>(this.url+"/get-disciplins");
  }

  public postLogin(login){
    return this.httpClient.post(this.url+"/is-user-valid",login)
  }

  public postSignUp(value){
    return this.httpClient.post(this.url+"/sign-up",value)
  }

  public putCompanion1(value){
    return this.httpClient.put(this.url+"/set-companion-1",value)
  }

  public putCompanion2(value){
    return this.httpClient.put(this.url+"/set-companion-2",value)
  }
}
