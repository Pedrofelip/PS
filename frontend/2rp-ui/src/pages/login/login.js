import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { parseJwt, usuarioAutenticado } from '../../services/auth';



class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            senha : '',
            erroMensagem : '',
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
        axios.post('http://localhost:5000/api/login', {
            email : this.state.email,
            senha : this.state.senha
        })

        // Verifica o retorno da requisição
        .then(resposta => {
            // Caso o status code seja 200,
            if (resposta.status === 200) {
                // salva o token no localStorage,
                localStorage.setItem('usuario-login', resposta.data.token);
                // exibe o token no console do navegador
                console.log('Meu token é: ' + resposta.data.token);
                // e define que a requisição terminou
                this.setState({ isLoading : false })

                // Define a variável base64 que vai receber o payload do token
                let base64 = localStorage.getItem('usuario-login').split('.')[1];
                // Exibe no console o valor presente na variável base64
                console.log(base64);
                // Exibe no console o valor convertido de base64 para string
                console.log(window.atob(base64));
                // Exibe no console o valor convertido da string para JSON
                console.log(JSON.parse(window.atob(base64)));

                // Exibe no console apenas o tipo de usuário logado
                console.log(parseJwt().role);

                // Verifica se o tipo de usuário logado é Administrador
                // Se for, redireciona para a página de Tipos Eventos
                if (parseJwt().role === '1') {
                    this.props.history.push('/tiposeventos');
                    console.log('estou logado: ' + usuarioAutenticado());
                }

                // Se não for, redireciona para a página home
                else {
                    this.props.history.push('/')
                }
            }
        })

        // Caso haja um erro,
        .catch(() => {
            // define o state erroMensagem com uma mensagem personalizada e que a requisição terminou
            this.setState({ erroMensagem : 'E-mail ou senha inválidos! Tente novamente.', isLoading : false });
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

            </div>   
        )
    }
};

export default Login;