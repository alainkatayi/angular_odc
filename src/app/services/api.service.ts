//service de l'api pour le rendre accessible dans toute l'application

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //creation d'une variable qui recupere l'addresse de l'api
  private apiUrl = 'http://127.0.0.1:8000/api/article'

  constructor(private http:HttpClient) { 
  }

  //creation de la methode getData qui renvoi les informations rde la variable apiUrl
  getData():Observable<any>{
    return this.http.get<any>(this.apiUrl)
  }

}
