import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entreprise } from 'src/app/Classes/Entreprise Class/entreprise';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  private baseURL = "http://localhost:8080/api/entreprise";
  constructor(private httpClient:HttpClient ) { }
  
  getEntreprisesList():Observable<Entreprise[]>{
   return this.httpClient.get<Entreprise[]>(`${this.baseURL}`);
  } 
  createEntreprise(entreprise:Entreprise):Observable<Object>{
   return this.httpClient.post(`${this.baseURL}`,entreprise)
  }
  getEntrepriseById(id:number):Observable<Entreprise>{
   return this.httpClient.get<Entreprise>(`${this.baseURL}/${id}`);
  }
  updateEntreprise(id:number,entreprise:Entreprise):Observable<Object>{
   return this.httpClient.put(`${this.baseURL}/${id}`,entreprise)
  }
  deleteEntreprise(id:number):Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
