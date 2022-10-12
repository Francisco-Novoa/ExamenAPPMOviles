import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ConsumoAPIService {
  httpOptions = { 
    headers: new HttpHeaders({ 
      'Content-Type': 
      'application/json', 
      'Access-Control-Allow-Origin' :'*' 
    }) 
  } 

  apiURL = 'https://pokeapi.co/api/v2/pokemon/ditto';

  constructor(private http:HttpClient) { 
    
  }
  getPosts(){
    return fetch(this.apiURL).then((response)=>response.json())
    } 
  
  mostrar(){
    
  }
}
