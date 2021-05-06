import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    //exatamente como o "headers" do Postman
    headers: new HttpHeaders().set("Authorization", environment.token)
  }

  //buscar todos os temas
  //Recebe um objeto do tipo Tema
  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>("http://localhost:8080/tema", this.token)
  }

  getByIdTema(id:number): Observable<Tema>{
    return this.http.get<Tema>(`http://localhost:8080/tema/${id}`, this.token)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>("http://localhost:8080/tema", tema/* , this.token */)
  }

  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>("http://localhost:8080/tema", tema, this.token)
  }

  deleteTema(id: number){   //c/ CRASE
    return this.http.delete(`http://localhost:8080/tema/${id}`, this.token)
  }

}
