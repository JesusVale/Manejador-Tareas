import 'react-toastify/dist/ReactToastify.css';
import "./style/app.css"
import Header from "./components/Header.jsx"
import Buscador from "./components/Buscador.jsx"
import OperationModal from "./components/OperationModal.jsx"
import useModal from "./hooks/useModal.js"
import useTareas from "./hooks/useTareas.js"
import Tareas from "./components/Tareas.jsx"
import { useParams } from 'react-router-dom';


function App() {

  const {isShowing, handleCloseModal, handleOpenModal} = useModal();
  const {tareas} = useTareas();
  let { tipo } = useParams();

  const filteredTareas = tareas.filter(tarea => tipo === undefined || (
    (tipo === "completadas" && tarea.tipo === "completada") ||
    (tipo === "eliminadas" && tarea.tipo === "eliminada") 
  ))

  return (
    <>
      <Header />
      <main>
        <div className="controls">
          <Buscador />
          <button className="controls__boton" onClick={handleOpenModal}>Agregar Tarea</button>
        </div>
        <OperationModal show={isShowing} closeModal={handleCloseModal} />
        <Tareas tareas={filteredTareas} />
      </main>
    </>
  )
}

export default App
