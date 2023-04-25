import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subvention } from 'src/app/Classes/Subvention Class/subvention';

@Injectable({
  providedIn: 'root'
})
export class SubventionService {

  private baseURL = "http://localhost:8080/api/subvention";
  constructor(private httpClient:HttpClient ) { }
  
  getSubventionsList():Observable<Subvention[]>{
   return this.httpClient.get<Subvention[]>(`${this.baseURL}`);
  } 
  createSubvention(subvention:Subvention):Observable<Object>{
   return this.httpClient.post(`${this.baseURL}`,subvention)
  }
  getSubventionById(id:number):Observable<Subvention>{
   return this.httpClient.get<Subvention>(`${this.baseURL}/${id}`);
  }
  updateSubvention(id:number,subvention:Subvention):Observable<Object>{
   return this.httpClient.put(`${this.baseURL}/${id}`,subvention)
  }
  deleteSubvention(id:number):Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  
}
