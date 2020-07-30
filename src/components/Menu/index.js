import React from 'react';
import logo from  '../../assets/img/naviflix.png'
import './menu.css';
import ButtonLink from './components/ButtonLink';
//fazer link SPA
import { Link } from 'react-router-dom'

//criando componente.
function Menu(){
    return (
        <header className='Menu'>

            <Link to="/"> 
                <img  className='Logo' src={logo} alt='Naviflix logo' />
            </Link>

            <ButtonLink  as={Link} className='ButtonLink' href="/cadastro/video" >
                        Novo Vídeo
            </ButtonLink>
        </header>

    );
}

export default Menu;