import { Postagem } from "./Postagem";

export class User{
    private id: number
    private nome: string
    private usuario: string 
    public senha: string
    private foto: string
    public tipoUsuario: string
    public postagem: Postagem[]
}