

export function getTareas(){

    const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    return tareas;  
}

export function guardarTareas(tareas){
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

export function eliminarTarea(tarea){
    const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    const tareasNuevas = tareas.findIndex(value => value.id === tarea.id);
    return tareasNuevas;
}

export function agregarTarea(tarea){
    const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas.push(tarea);
    localStorage.setItem("tareas", JSON.stringify(tareas));    
}

export function cambiarTipoTarea(idTarea, tipo){
    const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    const tareasNuevas = tareas.map(tarea => {
        if(tarea.id === idTarea){
            tarea.tipo = tipo;
        }
        return tarea
    })
    localStorage.setItem("tareas", JSON.stringify(tareasNuevas));
    return tareasNuevas;
}
