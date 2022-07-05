using System;
using System.Collections.Generic;

namespace _2rp_processoSeletivo_webApi.Domains
{
    public partial class Status
    {
        public Status()
        {
            Usuarios = new HashSet<Usuario>();
        }

        public int IdStatus { get; set; }
        public string? Status1 { get; set; }

        public virtual ICollection<Usuario> Usuarios { get; set; }
    }
}
