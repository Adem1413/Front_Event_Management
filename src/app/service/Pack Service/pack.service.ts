import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pack } from 'src/app/Classes/Pack Class/pack';

@Injectable({
  providedIn: 'root'
})
export class PackService {

  private baseURL = "http://localhost:8080/api/pack";
  constructor(private httpClient:HttpClient ) { }
  
  getPacksList():Observable<Pack[]>{
   return this.httpClient.get<Pack[]>(`${this.baseURL}`);
  } 
  createPack(pack:Pack):Observable<Pack>{
   return this.httpClient.post<Pack>(`${this.baseURL}`,pack)
  }
  getPackById(id:number):Observable<Pack>{
   return this.httpClient.get<Pack>(`${this.baseURL}/${id}`);
  }
  updatePack(id:number,pack:Pack):Observable<Object>{
   return this.httpClient.put(`${this.baseURL}/${id}`,pack)
  }
  deletePack(id:number):Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
