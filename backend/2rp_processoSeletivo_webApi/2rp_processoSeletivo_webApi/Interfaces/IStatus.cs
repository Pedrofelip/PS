using _2rp_processoSeletivo_webApi.Domains;

namespace _2rp_processoSeletivo_webApi.Interfaces
{
    public interface IStatus
    {
        List<Status> Listar();

        void Deletar(int id);
    }
}
