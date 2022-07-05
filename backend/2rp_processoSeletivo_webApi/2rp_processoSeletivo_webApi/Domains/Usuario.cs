using System;
using System.Collections.Generic;

namespace _2rp_processoSeletivo_webApi.Domains
{
    public partial class Usuario
    {
        public int IdUsuario { get; set; }
        public int? IdTipoUsuario { get; set; }
        public int? IdStatus { get; set; }
        public string? Nome { get; set; }
        public string? Email { get; set; }
        public string? Senha { get; set; }

        public virtual Status? IdStatusNavigation { get; set; }
        public virtual TipoUsuario? IdTipoUsuarioNavigation { get; set; }
    }
}
