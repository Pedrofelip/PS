import React, { Component } from 'react';
import axios from 'axios';
import { parseJwt, usuarioAutenticado } from '../../services/auth';

import imgLogin from '../../imgs/transacao-de-credito.jpg'

import '../../pages/style.css'
import './login.css'



class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            senha : '',
            errorMensage : '',
            isLoading : false
        }
    };

    // Função que faz a chamada para a API para realizar o login
    efetuaLogin = (event) => {
        // Ignora o comportamento padrão do navegador (recarregar a página, por exemplo)
        event.preventDefault();

        // Remove a frase de erro do state erroMensagem e define que a requisição está em andamento
        this.setState({ erroMensagem : '', isLoading : true });

        // Define a URL e o corpo da requisição
        axios.post('http://localhost:5113/api/login', {
            email : this.state.email,
            senha : this.state.senha
        })

        // Verifica o retorno da requisição
        .then(resposta => {
            // Caso o status code seja 200,
            if (resposta.data.token != null) {
                // salva o token no localStorage,
                localStorage.setItem('usuario-login', resposta.data.token);
                // exibe o token no console do navegador
                console.log('Meu token é: ' + resposta.data.token);
                // e define que a requisição terminou
                this.setState({ isLoading : false })

                console.log('meu token2' + parseJwt)

                // Verifica se o tipo de usuário logado é Administrador
                // Se for, redireciona para a página de Tipos Eventos
                if (parseJwt().role === '3') {
                    this.props.history.push('/home');
                    console.log('estou logado: ' + usuarioAutenticado());
                }

                // Se não for, redireciona para a página home
                else {
                    this.props.history.push('/perfil')
                }
            }
        })

        // Caso haja um erro,
        .catch(() => {
            // define o state erroMensagem com uma mensagem personalizada e que a requisição terminou
            this.setState({ errorMensage : 'E-mail ou senha inválidos! Tente novamente.', isLoading : false });
        })
    }

    // Função genérica que atualiza o state de acordo com o input
    // pode ser reutilizada em vários inputs diferentes
    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name] : campo.target.value })
    };

    render(){
        return(
            <div>
                <main className='fundo_site'>
                    <div className='fundo_login'>
                        <div className='img_login'>
                            
                        </div>

                        <div className='fundo_form'>
                             {/* Faz a chamada para a função de login quando o botão é pressionado */}

                             <form className='fundo_input' onSubmit={this.efetuaLogin}>
                             <div className='posicao_inputs'>
                                    <div className="item">
                                        <label className='label_login'>E-mail:</label>
                                        <input
                                            id="login__email"
                                            className="input_login"
                                            // E-mail
                                            type="text"
                                            name="email"
                                            // Define que o input email recebe o valor do state email
                                            value={this.state.email}
                                            // Faz a chamada para a função que atualiza o state, conforme o usuário altera o valor do input
                                            onChange={this.atualizaStateCampo}
                                        />
                                    </div>

                                    <div className="item">
                                        <label className='label_login'>Senha:</label>
                                        <input 
                                            id="login__password"
                                            className="input_login"
                                            // Senha
                                            type="password"
                                            name="senha"
                                            // Define que o input senha recebe o valor do state senha
                                            value={this.state.senha}
                                            // Faz a chamada para a função que atualiza o state, conforme
                                            // o usuário altera o valor do input
                                            onChange={this.atualizaStateCampo}
                                        />
                                    </div>
                                    
                                    {/* Exibe a mensagem de erro ao tentar logar com credenciais inválidas */}
                                    <p className='error_massage'>{this.state.errorMensage}</p>
                             </div>


                                    {/* 
                                        Verifica se a requisição está em andamento
                                        Se estiver, desabilita o click do botão
                                    */}

                                    {
                                        // Caso seja true, renderiza o botão desabilitado com o texto 'Loading...'
                                        this.state.isLoading === true &&
                                        <div className="item posicao_btn">
                                            <button className="btn_loading" id="btn__login" type="submit" disabled>Loading...</button>
                                        </div>
                                    }

                                    {
                                        // Caso seja false, renderiza o botão habilitado com o texto 'Login'
                                        this.state.isLoading === false &&
                                        <div className="item posicao_btn">
                                            <button
                                                className="btn_login" id="btn__login"
                                                type="submit"
                                                disabled={this.state.email === '' || this.state.senha === '' ? 'none' : ''}>
                                                entrar
                                            </button>
                                        </div>
                                    }
                                </form>
                        </div>
                    </div>
                </main>
            </div>   
        )
    }
};

export default Login;