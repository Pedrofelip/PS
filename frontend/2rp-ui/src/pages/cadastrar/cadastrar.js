import Header from '../../components/header/header' 
import {Component, React} from 'react'
import axios from 'axios';

import '../../pages/style.css'
import '../cadastrar/cadastrar.css'

class Cadastrar extends Component{
    constructor(props){
        super(props);
        this.state = {
            idTipoUsuario : 0,
            idStatus : 0,
            nome : '',
            email : '',
            senha : '', 
            listaTipoUsuario : [],
            listaStatus : [],
            isLoading : false
        }
    }


    buscarTipoUsuario = () => {
        // Faz a chamada para a API usando axios
        axios('http://localhost:5113/api/tipoUsuario', {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
        .then(resposta => {
            // Caso a requisição retorne um status code 200,
            if (resposta.status === 200) {
                // atualiza o state listaTiposEventos com os dados obtidos 
                this.setState({ listaTipoUsuario : resposta.data })
                // e exibe no console do navegador a lista de tipos eventos
                console.log(this.state.listaTipoUsuario)
            }
        })
        // Caso ocorra algum erro, mostra no console do navegador
        .catch(erro => console.log(erro))
    };

    // Função responsável por fazer a requisição e trazer a lista de instituições
    buscarStatus = () => {
        // Faz a chamada para a API usando axios
        axios('http://localhost:5113/api/status', {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
        .then(resposta => {
            // Caso a requisição retorne um status code 200,
            if (resposta.status === 200) {
                // atualiza o state listaInstituicoes com os dados obtidos
                this.setState({ listaStatus : resposta.data })
                // e exibe no console do navegador a lista de instituições
                console.log(this.state.listaStatus);
            }
        })
        // Caso ocorra algum erro, mostra no console do navegador
        .catch(erro => console.log(erro))
    };


        // Atualiza o state titulo com o valor do input
        atualizaStateCampo = (campo) => {
            this.setState({ [campo.target.name] : campo.target.value })
        };

        cadastrarUsuario = (event) =>{

        event.preventDefault();

        this.setState({ isLoading : true });

        let infos = {
            nome  : this.state.nome,
            email  : this.state.email,
            senha : this.state.senha,
            idTipoUsuario  : this.state.idTipoUsuario,
            idStatus  : this.state.idStatus
        };

        // Define a URL e o corpo da requisição
        axios.post('http://localhost:5113/api/usuarios', infos, {
            headers : {
                'Authorization' : 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })

        // Verifica o retorno da requisição
        .then(resposta => {
            // Caso retorne 201,
            if (resposta.status === 201) {
                // exibe no console do navegador a mensagem abaixo
                console.log('usuario cadastrado!');
                // e define que a requisição terminou
                this.setState({ isLoading : false });
            }
        })

        // Caso ocorra algum erro, exibe este erro no console do navegador
        .catch(erro => {
            console.log(erro);
            // e define que a requisição terminou
            this.setState({ isLoading : false });
        })
    };
        
        componentDidMount(){
            this.buscarStatus();
            this.buscarTipoUsuario();
        };
        
        render () {
            return (
            <div>
                <Header/>
                <main>
                    <div>
                        <section className='posicao_itens'>
                                <div className='form_fundo'>
                                    <form onSubmit={this.cadastrarUsuario}>
                                        <div className='form_posicao'>
                                            <div className='inputs_posicao'>
                                                <label className='login_label'>nome:</label>
                                                <input className='cadastro_input' name='nome' type="text" value={this.state.nome} onChange={this.atualizaStateCampo}/>

                                                <label className='login_label'>email:</label>
                                                <input className='cadastro_input' name='email' type="text" value={this.state.email} onChange={this.atualizaStateCampo}/>

                                                <label className='login_label'>senha:</label>
                                                <input className='cadastro_input' name='senha' type="text" value={this.state.senha} onChange={this.atualizaStateCampo} />
                                            </div>

                                            <div className='selects_posicao'>
                                                <label className='login_label'>permissão:</label>
                                                <select
                                                    // Tipo de Evento
                                                    name="idTipoUsuario"
                                                    // Define que o valor do input é o valor do state
                                                    value={this.state.idTipoUsuario}
                                                    // Chama a função para atualizar o state cada vez que há uma alteração no input
                                                    onChange={this.atualizaStateCampo}
                                                    className='select_cadastro'

                                                >
                                                    <option value="0">Selecione o tipo do usuario</option>

                                                    {/* Utiliza a função map() para preencher a lista de opções */}

                                                    {
                                                        // Percorre a lista de Tipos Eventos e retorna uma opção para cada tema
                                                        // definindo o valor como seu próprio ID
                                                        this.state.listaTipoUsuario.map( tema => {
                                                            return(
                                                                <option key={tema.idTipoUsuario} value={tema.idTipoUsuario}>
                                                                    {tema.tipoUsuario1}
                                                                </option>
                                                            );
                                                        } )
                                                    }
                                                </select>

                                                <label className='login_label'>status:</label>
                                                <select
                                                    // Tipo de Evento
                                                    name="idStatus"
                                                    // Define que o valor do input é o valor do state
                                                    value={this.state.idStatus}
                                                    // Chama a função para atualizar o state cada vez que há uma alteração no input
                                                    onChange={this.atualizaStateCampo}
                                                    className='select_cadastro'

                                                >
                                                    <option value="0">Selecione o status do usuario</option>

                                                    {/* Utiliza a função map() para preencher a lista de opções */}

                                                    {
                                                        // Percorre a lista de Tipos Eventos e retorna uma opção para cada tema
                                                        // definindo o valor como seu próprio ID
                                                        this.state.listaStatus.map( tema => {
                                                            return(
                                                                <option key={tema.idStatus} value={tema.idStatus}>
                                                                    {tema.status1}
                                                                </option>
                                                            );
                                                        } )
                                                    }
                                                </select>
                                            </div>
                                            
                                        </div>
                                             {
                                                // Caso seja true, renderiza o botão desabilitado com o texto 'Loading...'
                                                this.state.isLoading === true &&
                                                <div className='btn_posicao'>
                                                    <button className='cadastro_loading' type="submit" disabled>
                                                        Loading...
                                                    </button>
                                                </div>
                                            }

                                            {
                                                // Caso seja false, renderiza o botão habilitado com o texto 'Cadastrar'
                                                this.state.isLoading === false &&
                                                <div className='btn_posicao'>
                                                    <button className='btn_cadastro' type="submit">
                                                        Cadastrar
                                                    </button> 
                                                </div>
                                            }           
                                    </form>
                                </div>
                        </section>
                    </div>
                </main>
            </div>
        
        
        );
    }
}   


export default Cadastrar;
