import{ useState, useEffect } from 'react'
import Mensaje  from './Mensaje'
import CerrarBtn from "../img/cerrar.svg";


const Modal = ({ 
  setModal, 
  animarModal, 
  setAnimarModal, 
  guardarGasto, 
  editarGasto,
  setEditarGasto
 }) => {
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [fecha, setFecha] = useState('')
    const [id, setId] = useState('')

  useEffect(() =>{
    if( Object.keys(editarGasto).length > 0 ){
      setNombre(editarGasto.nombre)
      setCantidad(editarGasto.cantidad)
      setCategoria(editarGasto.categoria)
      setFecha(editarGasto.fecha)
      setId(editarGasto.id)
    }
  },[])

  const ocultarModal = () => {
    setAnimarModal(false)
    setEditarGasto({})
    setTimeout(() => {
      setModal(false)
    }, 500)
  };
  const handleSubmit = e =>{
      e.preventDefault()
      if([nombre, cantidad, categoria].includes('')){
          setMensaje('Todos los campos son obligatorios')

          setTimeout( ()=>{
          setMensaje('')
          }, 1000)
          return
      }

        guardarGasto({ nombre, cantidad, categoria, fecha, id })
      }
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
          src={CerrarBtn}
          alt="cerrar ventana modal"
          onClick={ocultarModal}
        />
      </div>
      <form className={`formulario ${animarModal ? "animar" : "cerrar"}`}
        onSubmit= {handleSubmit}>
        <legend>{editarGasto.nombre ? 'Editar Gasto' : 'Nuevo gasto'}</legend>
        {mensaje && <Mensaje tipo='error'> {mensaje} </Mensaje>}
        <div className="campo">
          <label htmlFor="nombre" >Nombre Gastos</label>
          <input type="text" placeholder="Añade el Nombre del Gasto" value= {nombre} onChange= {e =>setNombre(e.target.value)}/>
        </div>
        <div className="campo">
          <label htmlFor="cantidad" >Cantidad</label>
          <input type="number" placeholder="Ejemplo: 300" value= {cantidad} onChange= {e =>setCantidad(Number(e.target.value))}/>
        </div>
        <div className="campo">
          <label htmlFor="catergoria" >Categoría</label>
          <select id="categoria" value= {categoria} onChange= {e =>setCategoria(e.target.value)}>
            <option value=""> -- Seleccione -- </option>
            <option value="ahorro"> Ahorro </option>
            <option value="comida"> Comida </option>
            <option value="casa"> Casa </option>
            <option value="gastos"> Gastos Varios</option>
            <option value="ocio"> Ocio </option>
            <option value="salud"> Salud </option>
            <option value="suscripciones"> Suscripciones </option>
            <option value="ropa"> Ropa y cosmética </option>
          </select>
        </div>
        <input type="submit" 
        value={editarGasto.nombre ? "Guardar cambios": "Añadir Gasto"}
        />
      </form>
    </div>
  );
};

export default Modal;
