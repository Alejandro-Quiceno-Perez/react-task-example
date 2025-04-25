import React from 'react'
import TaskCard from './TaskCard'
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'


const TaskaList = () => {
       const { task } = useContext(TaskContext);


       if (task.length === 0) {
              return <h1>No hay ninguna Tarea en este momento</h1>
       }

       return (
              <div className='row'>
                     {
                            task.map((tarea) => (
                                   <TaskCard key={tarea.id} tarea={tarea} />
                            ))
                     }
              </div>
       )
}

export default TaskaList;
