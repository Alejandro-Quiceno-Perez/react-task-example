import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

const TaskCard = ({ tarea }) => {
       const { deleteTask } = useContext(TaskContext);

       return (
              <div className='card col-5 m-2' key={tarea.id}>
                     <div className="card-header">
                            <h4 > <span>{tarea.id}: </span>{tarea.title}</h4>
                     </div>
                     <div className="card-body">
                            <p className=''>{tarea.description}</p>
                            <button className='btn btn-outline-danger' onClick={() => deleteTask(tarea.id)}>Eliminar tarea</button>
                     </div>
              </div>
       )
}

export default TaskCard
