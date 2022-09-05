import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMat } from "../features/mats/matsSlice";
import { v4 as uuid } from "uuid";
import { Navigate, useNavigate} from "react-router-dom";

function MatsForm() {

  const [mat, setMat] = useState({
    material: '',
    cantidad: '',
    poderCal: '',
    estado: false
  })

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setMat({
      ...mat,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMat({
      ...mat,
      id: uuid(),
    }))
    navigate("/")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="material"
        type="text" 
        placeholder="Material..."
        onChange={handleChange}
        />
      <input 
        name="cantidad"
        type="text" 
        placeholder="Cantidad en KG"
        onChange={handleChange}
        />
      <input 
        name="poderCal"
        type="text" 
        placeholder="Q"
        onChange={handleChange}
        />
        <button>Agregar</button>
    </form>

  )
}

export default MatsForm