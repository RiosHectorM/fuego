import { useState } from "react";

function CargaDatos() {

  const [sup, setSup] = useState(1);
  

  const handleChange = (e) => {
    setSup({
      ...sup,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div >
      <h3 className="fs-5">Carga de Datos</h3>
      <p>Ingrese la Superficie</p>
      <input
        name="superficie"
        type="text"
        placeholder="Superficie en m2"
        onChange={handleChange}
      />
    </div>
  )
}

export default CargaDatos