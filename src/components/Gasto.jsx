import React from 'react'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
    
} from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"
import { formatearFecha } from '../helpers';
import iconoAhorro from '../img/icono_ahorro.svg'
import iconoCasa from '../img/icono_casa.svg'
import iconoComida from '../img/icono_comida.svg'
import iconoOcio from '../img/icono_ocio.svg'
import iconoGastos from '../img/icono_gastos.svg'
import iconoSalud from '../img/icono_salud.svg'
import iconoSuscripciones from '../img/icono_suscripciones.svg'

const iconoImg = {
    ahorro : iconoAhorro,
    comida : iconoComida,                                  
    casa : iconoCasa,                                     
    gastos : iconoGastos,
    ocio :  iconoOcio,                                   
    salud : iconoSalud,                                 
    suscripciones : iconoSuscripciones,
    ropa : iconoGastos                                       
}

const Gasto = ({gasto, setEditarGasto, eliminarGasto}) => {
    const {categoria, nombre, cantidad, fecha, id} = gasto;

    const leadingActions = () =>(
        <LeadingActions>
        <SwipeAction onClick= {()=> setEditarGasto(gasto)}>
                Editar
            </SwipeAction>
        </LeadingActions>)

    const trailingActions = () =>(
        <TrailingActions>
            <SwipeAction onClick= {()=> eliminarGasto(id)}
            destructive = {true}>
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )
    return (
    <SwipeableList>
<SwipeableListItem
        leadingActions = {leadingActions()}
        trailingActions = {trailingActions()}
        >
        
        <div className="gasto sombra" >
            <div className="contenido-gasto">
                <img src={iconoImg[categoria]} alt="icono gasto" />
                <div className="descripcion-gasto">
                    <p className="categoria">
                        {categoria}
                    </p>
                    <p className="nombre-gasto">{nombre}</p>
                    <p className="fecha-gasto">
                        Gastado el: {''}
                        <span>{formatearFecha(fecha)}</span>
                    </p>
                </div>
            </div>
            <p className="cantidad-gasto">{cantidad} €</p>
        </div>
        </SwipeableListItem>
        </SwipeableList>
    )
}

export default Gasto
