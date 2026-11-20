import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import "../styles/register-form.css";

function RegisterForm() {
  const navigate = useNavigate();

  const [email] = useState(
    sessionStorage.getItem("registerEmail") || ""
  );

  const [form, setForm] = useState({
    fullName: "",
    cpf: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    neighborhood: "",
    city: "",
    cep: "",
    complement: "",
    newsletter: true,
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (!email) {
      setError("E-mail não encontrado. Volte à etapa anterior.");
      return;
    }

    if (form.password.length < 6) {
      setError("A senha precisa ter pelo menos 6 caracteres.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    setLoading(true);

    try {
      // Cria a conta no Supabase Auth
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password: form.password,
        options: {
          data: {
            full_name: form.fullName,
          },
        },
      });

      if (signUpError) {
  console.error("ERRO NO CADASTRO:", signUpError);
  throw signUpError;
}

      if (!data.user) {
        throw new Error("Não foi possível criar sua conta.");
      }

      // Salva as informações adicionais do usuário
      if (!data.session) {
        throw new Error(
          "A conta foi criada, mas é necessário confirmar o e-mail antes de salvar o perfil. Verifique as configurações de confirmação de e-mail do Supabase."
        );
      }

      const { error: profileError } = await supabase
        .from("profiles")
        .insert({
          id: data.user.id,
          full_name: form.fullName,
          phone: form.phone,
          address: form.address,
          neighborhood: form.neighborhood,
          city: form.city,
          cep: form.cep,
          complement: form.complement,
          newsletter: form.newsletter,
        });

      if (profileError) throw profileError;

      sessionStorage.setItem("registeredName", form.fullName);

      navigate("/sucesso");
    } catch (err) {
      setError(err.message || "Ocorreu um erro ao criar sua conta.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="register-form-page">
      <form className="register-form-container" onSubmit={handleSubmit}>
        <h1>Criar Conta</h1>

        {/* Informações pessoais */}
        <section className="register-form-card">
          <h2>Informações Pessoais</h2>

          <div className="register-form-field">
            <label htmlFor="fullName">Nome Completo *</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Insira seu nome"
              value={form.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-form-field">
            <label htmlFor="cpf">CPF *</label>
            <input
              id="cpf"
              name="cpf"
              type="text"
              placeholder="Insira seu CPF"
              value={form.cpf}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-form-field">
            <label htmlFor="email">E-mail *</label>
            <input
              id="email"
              type="email"
              value={email}
              readOnly
            />
          </div>

          <div className="register-form-field">
            <label htmlFor="phone">Celular *</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Insira seu celular"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-form-field">
            <label htmlFor="password">Senha *</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Crie uma senha"
              value={form.password}
              onChange={handleChange}
              minLength="6"
              required
            />
          </div>

          <div className="register-form-field">
            <label htmlFor="confirmPassword">
              Confirmar Senha *
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirme sua senha"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        </section>

        {/* Informações de entrega */}
        <section className="register-form-card">
          <h2>Informações de Entrega</h2>

          <div className="register-form-field">
            <label htmlFor="address">Endereço *</label>
            <input
              id="address"
              name="address"
              type="text"
              placeholder="Insira seu endereço"
              value={form.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-form-field">
            <label htmlFor="neighborhood">Bairro *</label>
            <input
              id="neighborhood"
              name="neighborhood"
              type="text"
              placeholder="Insira seu bairro"
              value={form.neighborhood}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-form-field">
            <label htmlFor="city">Cidade *</label>
            <input
              id="city"
              name="city"
              type="text"
              placeholder="Insira sua cidade"
              value={form.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-form-field">
            <label htmlFor="cep">CEP *</label>
            <input
              id="cep"
              name="cep"
              type="text"
              placeholder="Insira seu CEP"
              value={form.cep}
              onChange={handleChange}
              required
            />
          </div>

          <div className="register-form-field">
            <label htmlFor="complement">Complemento</label>
            <input
              id="complement"
              name="complement"
              type="text"
              placeholder="Insira complemento"
              value={form.complement}
              onChange={handleChange}
            />
          </div>
        </section>

        {/* Recebimento de ofertas */}
        <label className="register-newsletter">
          <input
            type="checkbox"
            name="newsletter"
            checked={form.newsletter}
            onChange={handleChange}
          />

          <span>
            Quero receber por email ofertas e novidades das lojas da
            Digital Store. A frequência de envios pode variar de acordo
            com a interação do cliente.
          </span>
        </label>

        {error && (
          <p className="register-form-error">{error}</p>
        )}

        <button
          type="submit"
          className="register-form-button"
          disabled={loading}
        >
          {loading ? "Criando conta..." : "Criar Conta"}
        </button>
      </form>
    </main>
  );
}

export default RegisterForm;