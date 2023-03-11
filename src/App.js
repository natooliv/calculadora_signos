import React, { useState } from "react";
import "./App.css";
// Cria o componente SignCalculator
const SignCalculator = () => {
  // Define o estado inicial para a data, o signo e o erro
  const [date, setDate] = useState("");
  const [sign, setSign] = useState("");
  const [error, setError] = useState("");
// Define a função handleSubmit para ser executada ao submeter o formulário
  const handleSubmit = (e) => {
    e.preventDefault();
// Previne o comportamento padrão de submissão do formulário

// Verifica se a data inserida é válida
    if (!isDateValid(date)) {
      setError("Data inválida");
      setSign("");
      return;
    }
// Extrai o mês e o dia da data inserida
    const month = parseInt(date.split("-")[1]);
    const day = parseInt(date.split("-")[2]);

// Criando uma lista com as informações dos signos, contendo nome, data de início e fim
    const signList = [
      { name: "Aquário", start: [1, 20], end: [2, 18] },
      { name: "Peixes", start: [2, 19], end: [3, 20] },
      { name: "Áries", start: [3, 21], end: [4, 19] },
      { name: "Touro", start: [4, 20], end: [5, 20] },
      { name: "Gêmeos", start: [5, 21], end: [6, 20] },
      { name: "Câncer", start: [6, 21], end: [7, 22] },
      { name: "Leão", start: [7, 23], end: [8, 22] },
      { name: "Virgem", start: [8, 23], end: [9, 22] },
      { name: "Libra", start: [9, 23], end: [10, 22] },
      { name: "Escorpião", start: [10, 23], end: [11, 21] },
      { name: "Sagitário", start: [11, 22], end: [12, 21] },
      { name: "Capricórnio", start: [12, 22], end: [1, 19] },
    ];
    // Encontrando as informações do signo da pessoa com a função find() e a lista de signos criada acima
    const signInfo = signList.find(
      (sign) =>
        (month === sign.start[0] && day >= sign.start[1]) ||
        (month === sign.end[0] && day <= sign.end[1])
    );
// Atualiza o estado do signo e limpa o estado do erro
    setSign(signInfo.name);
    setError("");
  };
// Define a função isDateValid para verificar se a data inserida é válida
  const isDateValid = (dateString) => {
    // Criando um objeto Date a partir da string da data
    const dateObj = new Date(dateString);
    // Verificando se a string é válida, se o ano é maior que 1900 e se o ano é menor que o ano atual
    return (
      dateString &&
      !isNaN(dateObj.getTime()) &&
      dateObj.getFullYear() > 1900 &&
      dateObj.getFullYear() < new Date().getFullYear()
    );
  };
// Renderiza o componente com o formulário, a mensagem de erro (se houver) e o signo (se houver)

  return (
    <div class="container">
      <h1>De qual signo você é?</h1>

      <form onSubmit={handleSubmit}>
    <label htmlFor="birthdate">
      Data de nascimento:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <button type="submit">Calcular</button>
      </form>
      {error && <p className="error">{error}</p>}
      {sign && <p className="sign">Seu signo é {sign}.</p>}
    </div>
  );
};

export default SignCalculator;