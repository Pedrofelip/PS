using _2rp_processoSeletivo_webApi.Interfaces;
using _2rp_processoSeletivo_webApi.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace _2rp_processoSeletivo_webApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class tipoUsuarioController : ControllerBase
    {
        /// <summary>
        /// Objeto _usuarioRepository que irá receber todos os métodos definidos na interface IuUsuarioRepository
        /// </summary>
        private ITipoUsuario _tipoUsuarioRepository { get; set; }

        /// <summary>
        /// Instancia o objeto _usuarioRepository para que haja a referência aos métodos no repositório
        /// </summary>
        public tipoUsuarioController()
        {
            _tipoUsuarioRepository = new tipoUsuarioRepository();
        }

        /// <summary>
        /// Lista todos os usuários
        /// </summary>
        /// <returns>Uma lista de usuários e um status code 200 - Ok</returns>
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_tipoUsuarioRepository.Listar());
            }
            catch (Exception erro)
            {
                return BadRequest(erro);
            }
        }

        /// <summary>
        /// Deleta um usuário existente
        /// </summary>
        /// <param name="id">ID do usuário que será deletado</param>
        /// <returns>Um status code 204 - No Content</returns>
        /// 
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            try
            {
                _tipoUsuarioRepository.Deletar(id);

                return StatusCode(204);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
