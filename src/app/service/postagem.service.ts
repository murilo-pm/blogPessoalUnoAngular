import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {
  //Possui a mesma configuração do tema.service
  constructor(private http: HttpClient) { }

  token = {
    //exatamente como o "headers" do Postman
    headers: new HttpHeaders().set("Authorization", environment.token)
  }

  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('http://localhost:8080/postagens', this.token)
  }

  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>("http://localhost:8080/postagens", postagem, this.token)
  }

  

}
