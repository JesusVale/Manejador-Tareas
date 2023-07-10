import { useId, useState } from "react";
import { DeleteIcon, LookIcon, CheckIcon } from "./icons.jsx";
import useTareas from "../hooks/useTareas.js";
import classNames from 'classnames';

export default function Tarea({tarea}){

    const {nombre, description, tipo, id} = tarea;
    const idCheckbox = useId();
    const [showInfo, setInfo] = useState(false);
    const [isCompleted, setCompleted] = useState(tipo === "completada");
    const { updateTypeTask } = useTareas();

    const classInfo = showInfo? "tarea__plus tarea__plus--show" : "tarea__plus"; 
    const claseTarea = classNames('tarea', {
        'tarea--completada': tipo === 'completada',
        'tarea--eliminada': tipo === 'eliminada',
      });

    function cambiarTipoTareaCompletada(){
        const isSelected = !isCompleted;
        setCompleted(isSelected);
        
        const tipoNuevo = isSelected? "completada":"normal";
        updateTypeTask(id, tipoNuevo);

    }

    return (
        <article className={claseTarea}>
            <div className="tarea__info">
                <h2 className="tarea__titulo">{nombre}</h2>
                <div className="tarea__botones">
                    
                    {
                        tipo !== "eliminada" && (
                            <>
                                <input name="checkbox" id={idCheckbox} checked={isCompleted} type="checkbox" className="tarea__checkbox" onChange={cambiarTipoTareaCompletada} />
                                <label htmlFor={idCheckbox} className="tarea__button tarea__button--check"><CheckIcon /></label>
                                <button className="tarea__button tarea__button--eliminar" onClick={() => updateTypeTask(id, "eliminada")}><DeleteIcon /></button>
                            </>
                            
                        ) 
                    }
                    <button className="tarea__button tarea__button--look" onClick={() => setInfo(!showInfo)}><LookIcon /></button>
                </div>
            </div>
            <div className={classInfo}>
                <p className="tarea__description">{description}</p>
            </div>
            
        </article>
    )
}