import { Postagem } from "./Postagem";

export class User{          //por que aqui é public?
    public id: number       //todo número é "number", pouco importa o tipo
    public nome: string
    public usuario: string 
    public senha: string
    public foto: string
    public tipo: string
    public postagem: Postagem[]
}