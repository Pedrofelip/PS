import Header from '../../components/header/header' 
import {Component, React} from 'react'
import axios from 'axios'

import '../listarUsuario/listarUsuario.css'
import '../../pages/style.css'

import iconDelete from '../../imgs/lixeira_excluir.png'

class Listar extends Component{
    constructor(props){
        super(props);
        this.state = {
            listaUsuarios : [],
            listaStatus : [],
            listaTipoUsuario : []
        }
    }

    buscarUsuarios = () => {
        // Faz a chamamda para a API usando axios
        axios('http://localhost:5113/api/usuarios', {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
        .then(resposta => {
            // Caso a requisição retorne um status code 200,
            if (resposta.status === 200) {
                // atualiza o state listaEventos com os dados obtidos
                this.setState({ listaUsuarios : resposta.data })
                // e mostra no console do navegador a lista de eventos
                console.log(this.state.listaUsuarios);
            }
        })
        // Caso ocorra algum erro, mostra no console do navegador
        .catch(erro => console.log(erro))
    };

    buscarStatus = () => {
        // Faz a chamamda para a API usando axios
        axios('http://localhost:5113/api/status', {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
        .then(resposta => {
            // Caso a requisição retorne um status code 200,
            if (resposta.status === 200) {
                // atualiza o state listaEventos com os dados obtidos
                this.setState({ listaStatus : resposta.data })
                // e mostra no console do navegador a lista de eventos
                console.log(this.state.listaStatus);
            }
        })
        // Caso ocorra algum erro, mostra no console do navegador
        .catch(erro => console.log(erro))
    };

    buscarTipoUsuario = () => {
        // Faz a chamamda para a API usando axios
        axios('http://localhost:5113/api/tipoUsuario', {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
        .then(resposta => {
            // Caso a requisição retorne um status code 200,
            if (resposta.status === 200) {
                // atualiza o state listaEventos com os dados obtidos
                this.setState({ listaTipoUsuario : resposta.data })
                // e mostra no console do navegador a lista de eventos
                console.log(this.state.listaTipoUsuario);
            }
        })
        // Caso ocorra algum erro, mostra no console do navegador
        .catch(erro => console.log(erro))
    };

    excluirUsuario = (event) =>{
        fetch('http://localhost:5113/api/usuarios' + event.idUsuario,{
            method : 'DELETE'
        })

        .catch(erro => console.log(erro))

        .then(this.buscarUsuarios())
    }

    componentDidMount(){
        this.buscarUsuarios();
        this.buscarStatus();
        this.buscarTipoUsuario();
    }

    render(){
      return(
        <div>
            <Header/>
            <main >
                <section className='secao_form_lista'>
                    <div className='fundo_tabela'>
                        <table className='tabela'>
                            <thead className='cabecalho_tabela'>
                                <tr className='alinhamento_colunas'>
                                    <div className="coluna coluna_ponta_esquerda"><th className="titulo_coluna">nome</th></div>
                                    <div className="coluna"><th className="titulo_coluna">email</th></div>
                                    <div className="coluna"><th className="titulo_coluna">senha</th></div>
                                    <div className="coluna"><th className="titulo_coluna">permissão</th></div>
                                    <div className="coluna coluna_ponta_direita"><th className="titulo_coluna">Status</th></div>
                                </tr>
                            </thead>

                            <tbody className='corpo_tabela'>
                                {/* Preenche o corpo da tabela usando o função map() */}
                                {
                                    this.state.listaUsuarios.map( event => {
                                        return(
                                            <tr key={event.idUsuario} className='alinhamento_colunas'>
                                                <div className='input_form coluna_ponta_esquerda'>
                                                    <td className='inputs_form coluna_ponta_esquerda'>{event.nome}</td>
                                                </div>

                                                <div className='input_form'>
                                                    <td className='inputs_form'>{event.email}</td>
                                                </div>

                                                <div className='input_form'>
                                                    <td className='inputs_form'>{event.senha}</td>
                                                </div>

                                                <div className='input_form'>
                                                    <td className='inputs_form'>{event.idTipoUsuario}</td>
                                                </div>

                                                <div className='input_form coluna_ponta_direita' id='tabela_ponta_direita'>
                                                    <td className='inputs_form'>{event.idStatus}</td>
                                                </div>

                                                <td><button onClick={() => this.excluirUsuario(event)} className='btn_delete'><img className='iconDelete' src={iconDelete}/></button></td>

                                            </tr>
                                        );
                                    } )
                                }
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
      );
    }
}

export default Listar