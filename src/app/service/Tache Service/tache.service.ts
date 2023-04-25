import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tache } from 'src/app/Classes/MediaTache Class/tache';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  private baseURL = "http://localhost:8080/api/media";
  constructor(private httpClient:HttpClient ) { }
  
  getTachesList():Observable<Tache[]>{
   return this.httpClient.get<Tache[]>(`${this.baseURL}`);
  } 
  createTache(tache:Tache):Observable<Object>{
   return this.httpClient.post(`${this.baseURL}`,tache)
  }
  getTacheById(id:number):Observable<Tache>{
   return this.httpClient.get<Tache>(`${this.baseURL}/${id}`);
  }
  updateTache(id:number,tache:Tache):Observable<Object>{
   return this.httpClient.put(`${this.baseURL}/${id}`,tache)
  }
  deleteTache(id:number):Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
