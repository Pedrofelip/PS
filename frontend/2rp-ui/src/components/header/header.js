import React from 'react';
import '../header/header.css'
import '../../pages/style.css'

import sair from '../../imgs/saida-branca.png'
import voltar from '../../imgs/voltar-branco.png'





function Header(){
    return(
    <header className='cabecalho'>
      <div className='itens_cabecalho'>

      <a href='/home' className='btn_voltar icon'><img src={voltar}/></a>
      <button className='btn_sair icon'><img src={sair}/></button>

      </div>
    </header>
    );
}
export default Header;