import { useState } from "react";

const ManageData = () => {
    let someData = 10;

    const [number, setNumber] = useState(10);

  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar variável</button>
        </div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(42)}>Mudar variável</button>
        </div>
    </div>
        
  )
}

export default ManageData