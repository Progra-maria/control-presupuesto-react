import { useState, useEffect } from 'react'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({presupuesto, 
                            gastos,
                            setGastos,
                            setPresupuesto,
                            setIsValidPresupuesto
                        }) => {

        const [disponible, setDisponible] = useState(0)
        const [gastado, setGastado] = useState(0)
        const [porcentaje, setPorcentaje] = useState(0)

        useEffect(() => {
            const totalGastado = gastos.reduce( (total, gasto) => gasto.cantidad + total, 0 );

            const totalDisponible = presupuesto - totalGastado;

            const calcularPorcentaje = ((totalGastado*100)/presupuesto).toFixed(2)
                setTimeout( ()=>{
                    setPorcentaje(calcularPorcentaje)
                }, 1000)
                
            

            setGastado(totalGastado)
            setDisponible(totalDisponible)
        }, [gastos])
    const formatearCantidad = (cantidad)=>{
        return cantidad.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
    }

    const handleResetApp = ()=>{
        const resultado = confirm('¿Estás seguro de que deseas resetear la app?')
        if(resultado){
            setGastos([])
            setPresupuesto(0)
            setIsValidPresupuesto(false)
        }else{ 
            console.log('No')
        }
    }   
    
    return (
        <div className='contenedor contenedor-presupuesto sombra dos-columnas'>
            <div>
                <CircularProgressbar
                styles= {buildStyles({
                    pathColor: porcentaje > 100 ? '#dc2626' : '#3B82F6',
                    trailColor: 'F5F5F5',
                    textColor: porcentaje > 100 ? '#dc2626' : '#3B82F6',
                })}
                value= {porcentaje}
                text= {`${porcentaje}% Gastado`}
                />
            </div>
                <div className="contenido-presupuesto">
                    <button 
                    className="reset-app"
                    type="button"
                    onClick={handleResetApp}
                    >
                        Resetear App
                    </button>
                    <p><span>Presupuesto:</span> {formatearCantidad(presupuesto)}
                        </p>
                        <p className={`${disponible < 0 ? 'negativo': ''}`}>
                            <span>Disponible:</span> {formatearCantidad(disponible)}
                        </p>
                        <p>
                            <span>Gastado:</span> {formatearCantidad(gastado)}
                        </p>
                        
                </div>
        </div>
    )
}

export default ControlPresupuesto
