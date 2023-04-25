import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipe } from 'src/app/Classes/Equipe Class/equipe';
import { Oc } from 'src/app/Classes/Oc Class/oc';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  private baseURL = "http://localhost:8080/api/equipe";
  constructor(private httpClient:HttpClient ) { }
  
  getEquipesList():Observable<Equipe[]>{
   return this.httpClient.get<Equipe[]>(`${this.baseURL}`);
  } 
  createEquipe(equipe:Equipe):Observable<Object>{
   return this.httpClient.post(`${this.baseURL}`,equipe)
  }
  getEquipeById(id:number):Observable<Equipe>{
   return this.httpClient.get<Equipe>(`${this.baseURL}/${id}`);
  }
  updateEquipe(id:number,equipe:Equipe):Observable<Object>{
   return this.httpClient.put(`${this.baseURL}/${id}`,equipe)
  }
  deleteEquipe(id:number):Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
