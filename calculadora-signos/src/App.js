import React, { useState } from "react";
import "./App.css";
const SignCalculator = () => {
  const [date, setDate] = useState("");
  const [sign, setSign] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isDateValid(date)) {
      setError("Data inválida");
      setSign("");
      return;
    }

    const month = parseInt(date.split("-")[1]);
    const day = parseInt(date.split("-")[2]);

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

    const signInfo = signList.find(
      (sign) =>
        (month === sign.start[0] && day >= sign.start[1]) ||
        (month === sign.end[0] && day <= sign.end[1])
    );

    setSign(signInfo.name);
    setError("");
  };

  const isDateValid = (dateString) => {
    const dateObj = new Date(dateString);
    return (
      dateString &&
      !isNaN(dateObj.getTime()) &&
      dateObj.getFullYear() > 1900 &&
      dateObj.getFullYear() < new Date().getFullYear()
    );
  };

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