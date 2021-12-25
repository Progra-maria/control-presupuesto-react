import React from 'react'
import Gasto from './Gasto'
const ListadoGastos = ({gastos, 
                        setEditarGasto, 
                        eliminarGasto,
                        filtro,
                        gastosFiltrados}) => {

    return (
        <div className="listado-gastos contenedor">
                    {
                    filtro ? (
                    <>
                    <h2>{gastosFiltrados.length ? 'Gastos' : `No hay gastos en la categoría "${filtro}" `}</h2>

                    {gastosFiltrados.map( gasto =>(
                        <Gasto
                            key= {gasto.id}
                            gasto = {gasto}
                            setEditarGasto = {setEditarGasto}
                            eliminarGasto = {eliminarGasto}
                        />
                    ))}
                    </>

                    ) : (
                        <>
                        <h2>{gastos.length ? 'Gastos' : 'No has añadido ningún gasto'}</h2>
                        {gastos.map( gasto =>(
                            
                            <Gasto
                                key= {gasto.id}
                                gasto = {gasto}
                                setEditarGasto = {setEditarGasto}
                                eliminarGasto = {eliminarGasto}
                            />          
                        ))}
                        </>
                    )}
        </div>
    )
}

export default ListadoGastos
