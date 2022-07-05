using _2rp_processoSeletivo_webApi.Domains;
using _2rp_processoSeletivo_webApi.Interfaces;
using _2rp_processoSeletivo_webApi.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace _2rp_processoSeletivo_webApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class usuarioController : ControllerBase
    {

        public class UsuariosController : ControllerBase
        {
            /// <summary>
            /// Objeto _usuarioRepository que irá receber todos os métodos definidos na interface IuUsuarioRepository
            /// </summary>
            private IUsuarioRepository _usuarioRepository { get; set; }

            /// <summary>
            /// Instancia o objeto _usuarioRepository para que haja a referência aos métodos no repositório
            /// </summary>
            public UsuariosController()
            {
                _usuarioRepository = new usuarioRepository();
            }

            /// <summary>
            /// Lista todos os usuários
            /// </summary>
            /// <returns>Uma lista de usuários e um status code 200 - Ok</returns>
            [Authorize]
            [HttpGet]
            public IActionResult Get()
            {
                try
                {
                    return Ok(_usuarioRepository.Listar());
                }
                catch (Exception erro)
                {
                    return BadRequest(erro);
                }
            }

            /// <summary>
            /// Busca um usuário através do ID
            /// </summary>
            /// <param name="id">ID do usuário que será buscado</param>
            /// <returns>Um usuário buscado e um status code 200 - Ok</returns>
            [HttpGet("{id}")]
            public IActionResult GetById(int id)
            {
                try
                {
                    return Ok(_usuarioRepository.BuscarPorId(id));
                }
                catch (Exception erro)
                {
                    return BadRequest(erro);
                }
            }

            /// <summary>
            /// Cadastra um novo usuário
            /// </summary>
            /// <param name="novoUsuario">Objeto novoUsuario que será cadastrado</param>
            /// <returns>Um status code 201 - Created</returns>
            [Authorize(Roles = "3")]
            [Authorize(Roles = "2")]
            [HttpPost]
            public IActionResult Post(Usuario novoUsuario)
            {
                try
                {
                    _usuarioRepository.Cadastrar(novoUsuario);

                    return StatusCode(201);
                }
                catch (Exception ex)
                {
                    return BadRequest(ex);
                }
            }

            /// <summary>
            /// Atualiza um usuário existente
            /// </summary>
            /// <param name="id">ID do usuário que será atualizado</param>
            /// <param name="usuarioAtualizado">Objeto com as novas informações</param>
            /// <returns>Um status code 204 - No Content</returns>
            [Authorize]
            [HttpPut("{id}")]
            public IActionResult Put(int id, Usuario usuarioAtualizado)
            {
                try
                {
                    _usuarioRepository.Atualizar(id, usuarioAtualizado);

                    return StatusCode(204);
                }
                catch (Exception ex)
                {
                    return BadRequest(ex);
                }
            }

            /// <summary>
            /// Deleta um usuário existente
            /// </summary>
            /// <param name="id">ID do usuário que será deletado</param>
            /// <returns>Um status code 204 - No Content</returns>
            /// 
            [Authorize(Roles = "3")]
            [HttpDelete("{id}")]
            public IActionResult Delete(int id)
            {
                try
                {
                    _usuarioRepository.Deletar(id);

                    return StatusCode(204);
                }
                catch (Exception ex)
                {
                    return BadRequest(ex);
                }
            }
        }
    }
}
