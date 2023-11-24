import FilmeRepositorioInterface from "./filme-repositorio-interface"
class SalvaFilme{
    
    constructor(private bancoInterface:FilmeRepositorioInterface){}
    public async execute(input:Input):Promise<Output|undefined>{
        const {id, titulo, sinopse, imagem} = input
        //Salvar no Banco
        const resultado = await this.bancoInterface.salvar({id,titulo,sinopse,imagem})
        //Retornar o resultado
        if(!resultado) return undefined 
        return {id, titulo, sinopse, imagem}
    }
}
export default SalvaFilme

type Input = {
    id:number,
    titulo:string,
    sinopse:string,
    imagem:string
}
type Output = {
    id:number,
    titulo:string,
    sinopse:string,
    imagem:string
}