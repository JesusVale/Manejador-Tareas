
import Tarea from "./Tarea.jsx"

export default function Tareas({tareas}){
    return (
        <section className="tareas">
            {
                tareas.map((tarea) =>{
                    return <Tarea tarea={tarea} key={tarea.id} />
                })
            }
        </section>
    )
}