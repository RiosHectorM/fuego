import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMat, editMat } from "../features/mats/matsSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

function MatsForm() {
  const [mat, setMat] = useState({
    material: "",
    cantidad: "",
    poderCal: "",
    estado: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const materiales = useSelector(state => state.mats)

  const handleChange = (e) => {
    setMat({
      ...mat,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id){
      dispatch(editMat(mat))
    }else{
      dispatch(
        addMat({
          ...mat,
          id: uuid(),
        })
    );
    }
    navigate("/");
  };

  useEffect(()=> {
    console.log(params.id)
    if (params.id) {
      setMat(materiales.find(mat => mat.id === params.id));
    }
  },[])

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="material"
        type="text"
        placeholder="Material..."
        onChange={handleChange}
        value={mat.material}
      />
      <input
        name="cantidad"
        type="text"
        placeholder="Cantidad en KG"
        onChange={handleChange}
        value={mat.cantidad}
      />
      <input
        name="poderCal"
        type="text"
        placeholder="Q"
        onChange={handleChange}
        value={mat.poderCal}
      />
      <button>Agregar</button>
    </form>
  );
}

export default MatsForm;
