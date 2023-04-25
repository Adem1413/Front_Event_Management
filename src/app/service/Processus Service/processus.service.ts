import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Processus } from 'src/app/Classes/Processus Class/processus';

@Injectable({
  providedIn: 'root'
})
export class ProcessusService {

  private baseURL = "http://localhost:8080/api/processus";
  constructor(private httpClient:HttpClient ) { }
  
  getProcessussList():Observable<Processus[]>{
   return this.httpClient.get<Processus[]>(`${this.baseURL}`);
  } 
  createProcessus(processus:Processus):Observable<Object>{
   return this.httpClient.post(`${this.baseURL}`,processus)
  }
  getProcessusById(id:number):Observable<Processus>{
   return this.httpClient.get<Processus>(`${this.baseURL}/${id}`);
  }
  updateProcessus(id:number,processus:Processus):Observable<Object>{
   return this.httpClient.put(`${this.baseURL}/${id}`,processus)
  }
  deleteProcessus(id:number):Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
