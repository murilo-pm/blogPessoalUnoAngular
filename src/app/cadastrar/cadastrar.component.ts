import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User
  confirmeSenha: string
  tipoDeUsuario: string
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  //quando a página iniciar, faça X coisa
  ngOnInit(){
    window.scroll(0,0)
    
  }

  confirmSenha(event: any){
    this.confirmeSenha=event.targe.value
  }

  tipoUser(event: any){
    this.tipoDeUsuario=event.targe.value
  }

  cadastrar(event: any){
    this.user.tipoUsuario = this.tipoDeUsuario
    
    if(this.user.senha !=  this.confirmeSenha){
      alert("Senhas estão incorretas")
    }else{
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/entrar'])
        alert("Usuário cadastrado com sucesso")
      })
    }
  }

}
