import { useDispatch, useSelector } from "react-redux";
import { deleteMat } from "../features/mats/matsSlice";
import { Link } from "react-router-dom";


function MatsList() {
  const mats = useSelector(state => state.mats)
  console.log(mats)
  
  const distpatch = useDispatch()
  
  const handleDelete = (id) => {
    distpatch(deleteMat(id))
  }
  
  

  return (
    <div>
      <header>
        <h3>Mats List {mats.length}</h3>
        <Link to='/addMaterial'>
          Agregar Material
        </Link>
      </header>
      <table>
        <tbody>
          <tr>
            <td>MATERIAL</td>
            <td>CANTIDAD EN KG</td>
            <td>PODER CALORICO</td>
            <td>Eliminar Material</td>
            <td>Editar Material</td>
          </tr>
        {mats.map(mat =>(
          <tr key={mat.id}>
            <td>{mat.material}</td>
            <td>{mat.cantidad}</td>
            <td>{mat.poderCal}</td>
            <td><button onClick={() => handleDelete(mat.id)}>Borrar</button></td>
            <td><Link to={`editMaterial/${mat.id}`}>Editar</Link></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default MatsList