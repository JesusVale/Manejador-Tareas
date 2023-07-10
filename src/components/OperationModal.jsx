import { useId } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import useTareas from "../hooks/useTareas.js";


export default function OperationModal({show, closeModal}){

    const idNombreTarea = useId();
    const idDescTarea = useId();
    const { addTask } = useTareas();

    const classModal = show? "operationModal operationModal--show" : "operationModal";

    function guardarTarea(e){
        e.preventDefault();
        
        const {nombre, description} = Object.fromEntries(new window.FormData(e.target));
        const id = uuidv4();
        addTask({nombre, description, id, tipo: "normal"})
        toast.success('Se agregó la tarea correctamente', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        e.target.reset();
        closeModal();
        
    }

    return (
        <>
            <section className={classModal}>
                <div className="operationModal__container">
                    <header className="operationModal__header">
                        <h2 className="operationModal__titulo">Agregar Tarea</h2>
                        <button className="operationModal__close" onClick={closeModal}>X</button>
                    </header>
                    
                    <form className="operationModal__form" onSubmit={guardarTarea}>
                        <div className="operationModal__field">
                            <label htmlFor={idNombreTarea}>Nombre</label>
                            <input name="nombre" type="text" className="operationModal__input" id={idNombreTarea}/>
                        </div>
                        <div className="operationModal__field">
                            <label htmlFor={idDescTarea}>Descripción</label>
                            <textarea name="description" id={idDescTarea} cols="30" rows="10" className="operationModal__textarea"></textarea>
                        </div>
                        <div className="operationModal__botones">
                            <button className="operationModal__boton" type="submit">Agregar</button>
                            <button className="operationModal__boton" onClick={closeModal}>Cancelar</button>
                            
                        </div>
                        
                    </form>
                </div>
                
                
            </section>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
        
    )

}