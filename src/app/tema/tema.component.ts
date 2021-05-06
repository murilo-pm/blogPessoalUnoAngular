import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[] //lista de temas

  constructor(
    private router: Router,
    private temaService: TemaService
  ) { }

  ngOnInit(){
    if(environment.token==""){
      this.router.navigate(['/entrar'])
    }
    this.findAllTemas //sempre que iniciar a página tema, o "findAll" será executado
  }

  findAllTemas(){   //lista de tema
    this.temaService.getAllTema().subscribe((resp: Tema[])=>{
      this.listaTemas = resp
    })

  }

  cadastrar(){
    this.temaService.postTema(this.tema).subscribe((resp:Tema)=>{
      this.tema=resp
      alert("Tema cadastrado com sucesso")
      this.findAllTemas() //p/ mostrar todos os temas após cadastrar um novo
      this.tema = new Tema() //zerar campo p/ gerar um outro tema
    })
  }

}
