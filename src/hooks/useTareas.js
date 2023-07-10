import { useContext } from "react";
import { TareasContext } from "../context/tareas.jsx";

export default function useTareas(){
    const tareas = useContext(TareasContext);

    if(!tareas){
        throw new Error("Las tareas deben de estar envueltas por un TareasProvider")
    }

    return tareas;

}