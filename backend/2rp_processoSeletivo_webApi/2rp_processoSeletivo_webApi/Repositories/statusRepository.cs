using _2rp_processoSeletivo_webApi.Contexts;
using _2rp_processoSeletivo_webApi.Domains;
using _2rp_processoSeletivo_webApi.Interfaces;

namespace _2rp_processoSeletivo_webApi.Repositories
{
    public class statusRepository : IStatus
    {
        ProcessoContext ctx = new ProcessoContext();

        public Status BuscarPorId(int id)
        {
            return ctx.Statuses.FirstOrDefault(u => u.IdStatus == id);
        }

        public void Deletar(int id)
        {
            ctx.Statuses.Remove(BuscarPorId(id));

            ctx.SaveChanges();
        }

        public List<Status> Listar()
        {
            return ctx.Statuses.ToList();
        }
    }
}
