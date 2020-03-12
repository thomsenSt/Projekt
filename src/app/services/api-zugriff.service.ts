import { Disciplin } from './../model/disciplin.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiZugriffService {

  url = /*"http://10.20.6.26:3000"*/ "http://10.20.6.26:3000";
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

  public putCompanion2(value, values){
    return this.httpClient.get(this.url+"/set-companion-2?companion_2="+value+"&group_id="+values)
  }

  public putCompanion1(value, values){
    return this.httpClient.get(this.url+"/set-companion-1?companion_1="+value+"&group_id="+values)
  }

  public getGroupById(value) {
    return this.httpClient.get(this.url+"/get-group-by-disciplin-id?disciplin_id="+value);
  }
}
