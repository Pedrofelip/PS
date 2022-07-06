import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../pages/style.css'
import '../home/home.css'

import imgCadastro from '../../imgs/img-cadastrar-usuario.jpg'
import imgListar from '../../imgs/img-listar-usuario.png'
import imgPerfil from '../../imgs/img-perfil-usuario.jpg'

import Header from '../../components/header/header'


function Home() {
  return (
    <div>
      <Header/>

      <main>
        <section className='secao_cards'>
              <div className='posicionamento_cards'>
                  <a href='/listar'>
                    <div className='fundo_card'>
                    <img src={imgListar} className='img_card' alt="imagem congelada de uma gameplay de elden ring"/>

                      <h2 className='titulo_card'>listar</h2>
                      <p className='subtitulo_card'>listar todos os usuarios</p>
                    </div>
                  </a>

                  <a href='/cadastrar'>
                    <div className='fundo_card'>
                    <img src={imgCadastro} className='img_card' alt="imagem congelada de uma gameplay de elden ring"/>

                      <h2 className='titulo_card'>cadastrar</h2>
                      <p className='subtitulo_card'>cadastrar novos usuarios</p>
                    </div>
                  </a>

                  <a href='/perfil'>
                    <div className='fundo_card'>
                    <img src={imgPerfil} className='img_card' alt="imagem congelada de uma gameplay de elden ring"/>

                      <h2 className='titulo_card'>perfil</h2>
                      <p className='subtitulo_card'>perfil do usuario</p>
                    </div>
                  </a>
              </div>
        </section>
      </main>

    </div>


  );
}

export default Home;
