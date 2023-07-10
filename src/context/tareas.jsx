import { createContext, useEffect, useReducer } from "react";
import { TASK_OPERATIONS, tareasReducer } from "../reducers/tareas.js";
import { getTareas } from "../services/tareas.js";
const TareasContext = createContext();

function useTareasReducer(){
    const [state, dispatch] = useReducer(tareasReducer, []);

    useEffect(() =>{
        const getInitialValue = () =>{
            const initialValue = getTareas({tipo:"normal"});
            dispatch({type: TASK_OPERATIONS.SET_INITIAL_STATE, payload: initialValue});
        }
        getInitialValue();
    },[])

    const addTask = task =>{
        dispatch({type: TASK_OPERATIONS.ADD_TASK, payload: task})
    }

    const updateTypeTask = (idTask, tipo) =>{
        dispatch({type: TASK_OPERATIONS.UPDATE_TYPE_TASK, payload: {idTask, tipo}})
    }

    const searchTask  = (search) =>{
        dispatch({type: TASK_OPERATIONS.SEARCH_TASK, payload: search})
    }

    return {state, addTask, updateTypeTask, searchTask};

}


function TareasProvider({children}){
    
    const {state, addTask, updateTypeTask, searchTask} = useTareasReducer();
    
    return <TareasContext.Provider value={{
        addTask,
        updateTypeTask,
        searchTask,
        tareas: state
    }}>
        {children}
    </TareasContext.Provider>
}

export{
    TareasProvider,
    TareasContext
}