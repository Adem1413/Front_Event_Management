import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formateur } from '../../Classes/Formateur Class/formateur';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

 private baseURL = "http://localhost:8080/api/formateur";
 constructor(private httpClient:HttpClient ) { }
 
 getFormateursList():Observable<Formateur[]>{
  return this.httpClient.get<Formateur[]>(`${this.baseURL}`);
 } 
 createFormateur(formateur:Formateur):Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`,formateur)
 }
 getFormateurById(id:number):Observable<Formateur>{
  return this.httpClient.get<Formateur>(`${this.baseURL}/${id}`);
 }
 updateFormateur(id:number,formateur:Formateur):Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${id}`,formateur)
 }
 deleteFormateur(id:number):Observable<Object> {
   return this.httpClient.delete(`${this.baseURL}/${id}`);
 }
 

}
