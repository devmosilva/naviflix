import React from 'react';
import logo from  '../../assets/img/naviflix.png'
import './menu.css';
import ButtonLink from './components/ButtonLink';

//criando componente.
function Menu(){
    return (
        <header className='Menu'>
            <a href='/'> 
                <img  className='Logo' src={logo} alt='Naviflix logo' />
            </a>

            <ButtonLink className='ButtonLink'>
                        Novo Vídeo
            </ButtonLink>
        </header>

    );
}

export default Menu;