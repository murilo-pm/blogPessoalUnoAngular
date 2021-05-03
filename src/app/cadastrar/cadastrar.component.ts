import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})

export class CadastrarComponent implements OnInit { //TS2554: Expected 1 arguments, but got 0
  user: User = new User
  confirmarSenha: string
  tipoUsuario: string
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  //ngOnInit = quando a página iniciar, faça X coisa
  ngOnInit(){
    window.scroll(0,0)
    
  }
  //método em TS
  confirmSenha(event: any){
    this.confirmarSenha=event.target.value
  }

  tipoUser(event: any){
    this.tipoUsuario=event.target.value
  }

  cadastrar(){
    this.user.tipo = this.tipoUsuario
    //this.user.tipo = this.tipoUsuario
    
    if(this.user.senha !=  this.confirmarSenha){
      alert("Senhas estão incorretas")
    }else{
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/cadastrar'])
        alert("Usuário cadastrado com sucesso")
      }
      //, erro => {
        //console.log(erro)
      //}
      )
    }
  }

}
