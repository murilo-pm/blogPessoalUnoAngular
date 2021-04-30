import { Postagem } from "./Postagem";

export class User{
    private id: number
    private nome: string
    private usuario: string 
    private senha: string
    private foto: string
    private tipoUsuario: string
    public postagem: Postagem[]
}