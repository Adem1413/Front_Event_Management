import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Intervenant } from 'src/app/Classes/Intervenant Class/intervenant';

@Injectable({
  providedIn: 'root'
})
export class IntervenantService {

  private baseURL = "http://localhost:8080/api/intervenant";
  constructor(private httpClient:HttpClient ) { }
  
  getIntervenantsList():Observable<Intervenant[]>{
   return this.httpClient.get<Intervenant[]>(`${this.baseURL}`);
  } 
  createIntervenant(intervenant:Intervenant):Observable<Object>{
   return this.httpClient.post(`${this.baseURL}`,intervenant)
  }
  getIntervenantById(id:number):Observable<Intervenant>{
   return this.httpClient.get<Intervenant>(`${this.baseURL}/${id}`);
  }
  updateIntervenant(id:number,intervenant:Intervenant):Observable<Object>{
   return this.httpClient.put(`${this.baseURL}/${id}`,intervenant)
  }
  deleteIntervenant(id:number):Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
