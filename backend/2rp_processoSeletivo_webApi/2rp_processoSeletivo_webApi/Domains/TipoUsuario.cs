﻿using System;
using System.Collections.Generic;

namespace _2rp_processoSeletivo_webApi.Domains
{
    public partial class TipoUsuario
    {
        public TipoUsuario()
        {
            Usuarios = new HashSet<Usuario>();
        }

        public int IdTipoUsuario { get; set; }
        public string? TipoUsuario1 { get; set; }

        public virtual ICollection<Usuario> Usuarios { get; set; }
    }
}
