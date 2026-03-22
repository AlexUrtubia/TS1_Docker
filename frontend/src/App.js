import React, { useState } from "react";

function App() {
  const [data, setData] = useState(null);

  const loadData = async () => {
    try {
      const res = await fetch("http://localhost:3000/data");
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error(err);
      setData("Error conectando al backend");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Frontend React</h1>
      <button onClick={loadData}>Cargar datos</button>

      <pre>
        {data ? JSON.stringify(data, null, 2) : "Sin datos"}
      </pre>
    </div>
  );
}

export default App;