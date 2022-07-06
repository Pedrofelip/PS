using _2rp_processoSeletivo_webApi.Contexts;
using _2rp_processoSeletivo_webApi.Domains;
using _2rp_processoSeletivo_webApi.Interfaces;

namespace _2rp_processoSeletivo_webApi.Repositories
{
    public class tipoUsuarioRepository : ITipoUsuario
    {
        ProcessoContext ctx = new ProcessoContext();

        public TipoUsuario BuscarPorId(int id)
        {
            return ctx.TipoUsuarios.FirstOrDefault(u => u.IdTipoUsuario == id);
        }

        public void Deletar(int id)
        {
            ctx.TipoUsuarios.Remove(BuscarPorId(id));

            ctx.SaveChanges();
        }

        public List<TipoUsuario> Listar()
        {
            return ctx.TipoUsuarios.ToList();
        }
    }
}
