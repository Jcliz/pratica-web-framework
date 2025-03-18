import React from "react";

interface UsuarioModel {
    nome: string;
    idade?: number;
    dataNascimento?: any;
}

const Usuario: React.FC<> = ({ }) => {
    //useState == react altera a variavel
    const[nome, setNome] = useState(''); //armazena o estado de uma variavel == hook
    const[idade, setIdade] = useState(0);
    const[dataDeNascimento, setDatadeNascimento] = useState('');

    const[usuario, setUsuario] = useState<UsuarioModel>();
    
    const salvar = () => {
        console.log('salvar');
        console.log(nome);
        console.log(idade);
        console.log(dataDeNascimento);
        setUsuario({
            id: 0,
            nome: nome,
            idade: idade,
            dataDeNascimento: dataDeNascimento
        });

        setTimeout(() => {
            console.log(usuario);
        }, 2000);
        
    }  

    return (
        <div>
        <div className="mb-3">
            <label className="form-label">Nome</label>
            <input type="text" className="form-control" id="nome" aria-describedby="nome" 
                onChange={(e) => { setNome(e.target.value) }}/> <!-- pega o valor e adiciona no nome -->                  
        </div>
        <div className="mb-3">
            <label className="form-label">Idade</label>
            <input type="number" className="form-control" id="idade" aria-describedby="idade"
                onChange={(e) => { setIdade(parseInt(e.target.value)) }} />                    
        </div>
        <div className="mb-3">
            <label className="form-label">Data de Nascimento</label>
            <input type="date" className="form-control" id="dataDeNascimento" aria-describedby="data de nascimento" 
                onChange={(e) => { setDataDeNascimento(e.target.value) }}/>                    
        </div>
        <button type="button" className="btn btn-primary"
            onClick={() => { salvar() }}>Salvar</button>

        <div>
            {nome} <br/>
            {idade} <br/>
            {dataDeNascimento} <br/>
        </div>            
    </div>
    );
}
export default Usuario;