import React from "react";

interface UsuarioModel {
    nome: string;
    idade?: number;
    dataNascimento?: any;
}

const Usuario: React.FC<UsuarioModel> = ({ nome }) => {
    return (
       <div>
        meu primeiro componente react  {nome}

       
       </div>
       
    );
}
export default Usuario;