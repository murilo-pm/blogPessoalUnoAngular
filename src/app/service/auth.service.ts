import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
                                //O Angular precisa observa qual é o tipo que está entrando
  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>("http://localhost:8080/usuarios/logar", userLogin) 
    
  }

  cadastrar(user: User):Observable<User>{
    return this.http.post<User>("http://localhost:8080/usuarios/cadastrar", user)
  }

  getByIdUser(id: number): Observable<User>{
    return this.http.get<User>(`http://localhost:8080/usuarios/${id}`)
  }

  //verificará se o environment.token está preenchido
  logado(){  
    //let ok = false
      let ok: boolean = false

    if(environment.token != ""){    //o(a) usuário(a) estará logado(a) 
                                    //a partir do momento que existir um token
      ok=true
    }

    return ok
  }




}
