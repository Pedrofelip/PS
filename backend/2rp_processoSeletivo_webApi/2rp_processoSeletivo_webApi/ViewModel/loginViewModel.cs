using System.ComponentModel.DataAnnotations;

namespace _2rp_processoSeletivo_webApi.ViewModel
{
    public class loginViewModel
    {
        [Required(ErrorMessage = "Informe o e-mail do usuário!")]
        public string? Email { get; set; }

        [Required(ErrorMessage = "Informe a senha do usuário!")]
        public string? Senha { get; set; }
    }
}
