import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Oc } from 'src/app/Classes/Oc Class/oc';

@Injectable({
  providedIn: 'root'
})
export class OcService {

  private baseURL = "http://localhost:8080/api/oc";
  constructor(private httpClient:HttpClient ) { }
  
  getOcsList():Observable<Oc[]>{
   return this.httpClient.get<Oc[]>(`${this.baseURL}`);
  } 
  createOc(oc:Oc):Observable<Oc>{
   return this.httpClient.post<Oc>(`${this.baseURL}`,oc)
  }
  getOcById(id:number):Observable<Oc>{
   return this.httpClient.get<Oc>(`${this.baseURL}/${id}`);
  }
  updateOc(id:number,oc:Oc):Observable<Object>{
   return this.httpClient.put(`${this.baseURL}/${id}`,oc)
  }
  deleteOc(id:number):Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  addOcToEquipe(equipeId: number, oc: Oc): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/${equipeId}/ocs`, oc);
  }
}
