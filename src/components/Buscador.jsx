import { SearchIcon } from "./icons.jsx";
import useTareas from "../hooks/useTareas.js";

export default function Buscador(){
  
  const {searchTask} = useTareas();

  function buscarTarea(e){
    const search = e.target.value;
    searchTask(search);
  }


  return (
      <form className="buscador">
        <input type="text" className="buscador__input" onChange={buscarTarea}/>
        <button className="buscador__boton"><SearchIcon /></button>
      </form>
  )
}