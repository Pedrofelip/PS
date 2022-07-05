using _2rp_processoSeletivo_webApi.Domains;

namespace _2rp_processoSeletivo_webApi.Interfaces
{
    public interface IUsuarioRepository
    {

        List<Usuario> Listar();

        Usuario BuscarPorId(int id);

        void Cadastrar(Usuario novoUsuario);

        void Atualizar(int id, Usuario usuarioAtualizado);

        void Deletar(int id);

        Usuario Login(string email, string senha);
    }
}
