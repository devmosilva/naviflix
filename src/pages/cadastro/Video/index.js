import React from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';

function CadastroVideo (){

    return(
        <PageDefault>
            <h1>cadastro de vídeo...</h1>
            <Link to="/cadastro/categoria">
                cadastrar Categoria
            </Link>

        </PageDefault>
       
    )

}

export default CadastroVideo;