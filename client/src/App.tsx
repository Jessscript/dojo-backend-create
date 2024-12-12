import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3310/api/dough", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, quantity }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(`Pâte créée avec succès : ID ${data.insertId}`);
      } else {
        const error = await response.json();
        setMessage(`Erreur : ${error.error}`);
      }
    } catch (error) {
      setMessage(`Erreur réseau : ${error}`);
    }
  };

  return (
    <div>
      <div>
        <h2>Ajouter une pâte</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="name">Quantity :</label>
            <input
              type="number"
              id="name"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>
          <button type="submit">Créer</button>
        </form>
        {message && <p>{message}</p>}
      </div>
      <div>afficher liste</div>
    </div>
  );
}

export default App;
