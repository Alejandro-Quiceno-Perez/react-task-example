import { createContext, useState, useEffect } from "react"
import { tareas } from "../data/tareas"

export const TaskContext = createContext()

export const TaskContextProvider = (props) => {

       const [task, setTask] = useState([]); // Create a state variable to store the tasks

       const createTask = ({ title, description }) => {
              setTask([...task, {
                     id: task.length + 1,
                     title,
                     description
              }]);
       }

       const deleteTask = (tareaId) => {
              setTask(task.filter(tarea => tarea.id !== tareaId));
       }

       useEffect(() => {
              setTask(tareas);
       }, []);


       return (
              <TaskContext.Provider value={{
                     task,
                     deleteTask,
                     createTask
              }}>
                     {props.children}
              </TaskContext.Provider>
       );
}