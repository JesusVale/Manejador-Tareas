import { agregarTarea, cambiarTipoTarea, getTareas } from "../services/tareas.js";


const TASK_OPERATIONS = {
    SET_INITIAL_STATE: "SET_INITIAL_STATE",
    ADD_TASK: "ADD_TASK",
    UPDATE_TYPE_TASK : "UPDATE_TYPE_TASK",
    SEARCH_TASK : "SEARCH_TASK"
}

 function tareasReducer(state, action){
    const {type, payload} = action;
    switch(type){
        case TASK_OPERATIONS.SET_INITIAL_STATE:{
            return payload;
        }
        case TASK_OPERATIONS.ADD_TASK:{
            agregarTarea(payload);
            return [...state, payload];
        } 
        case TASK_OPERATIONS.UPDATE_TYPE_TASK:{
            const {idTask, tipo} = payload;
            const tareasNuevas = cambiarTipoTarea(idTask, tipo);
            return tareasNuevas;
        }
        case TASK_OPERATIONS.SEARCH_TASK:{
            if(payload === ""){
                return getTareas();
            }
            return state.filter(tarea =>  tarea.nombre.includes(payload));
        }
            
    }
 }

 export {
    tareasReducer,
    TASK_OPERATIONS
 }