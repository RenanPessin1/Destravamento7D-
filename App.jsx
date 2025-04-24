
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Input } from "./components/Input";
import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    alert("Lead capturado: " + email);
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
        "Ela disse: era uma agonia sem fim... até entender tudo." Agora, tudo mudou.
      </h1>
      <p style={{ fontSize: "1rem", color: "#666", marginBottom: "1.5rem", maxWidth: "600px" }}>
        O Destravamento 7D é o portal para quem sente que carrega algo forte dentro de si, mas ainda não conseguiu expressar. Está pronto para destravar?
      </p>
      <Card>
        <p style={{ marginBottom: "1rem" }}>Cadastre-se para testar o Destravamento com Marjorie:</p>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Seu melhor e-mail" />
          <Button onClick={handleSubmit}>Testar</Button>
        </div>
      </Card>
      <div style={{ marginTop: "2rem", maxWidth: "600px" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>Depoimento real:</h2>
        <p style={{ fontStyle: "italic", color: "#444" }}>
          “É uma conclusão muito bem organizada que eu nunca consegui tirar sozinha… o que causa uma agonia sem fim.” — Marjorie
        </p>
      </div>
    </div>
  );
}
