using _2rp_processoSeletivo_webApi.Domains;

namespace _2rp_processoSeletivo_webApi.Interfaces
{
    public interface ITipoUsuario
    {
        List<TipoUsuario> Listar();

        void Deletar(int id);
    }
}
