import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

// Definimos el componente funcional TaskForm
const TaskForm = () => {

       // Estado para almacenar el título de la tarea
       const [title, setTitle] = useState('');
       const [description, setDescription] = useState('');
       const { createTask } = useContext(TaskContext); // Usamos el contexto TaskContext

       // Función que se ejecuta cuando se envía el formulario
       const handleSubmit = (e) => {
              e.preventDefault(); // Evita que la página se recargue al enviar el formulario
              // console.log(title);  Muestra el título de la tarea en la consola

              const newTask = {
                     title,
                     description
              }; // Creamos un objeto con el título de la tarea

              createTask(newTask); // Llamamos a la función createTask y le pasamos el objeto newTask

              // Pasamos a limpiar el formulario después de enviar la tarea
              setTitle(''); // Limpiamos el estado del título
              setDescription(''); // Limpiamos el estado de la descripción
       }

       return (
              <>
                     <h1 className='text-center mt-4'>Formulario de Tareas</h1>
                     <form className='container  my-5 row' onSubmit={handleSubmit}> {/* Llamamos a handleSubmit cuando se envía el formulario */}
                            <div className="col-4">
                                   <input className='form-control  '
                                          placeholder='Escribe tu tarea' // Texto de ayuda dentro del input
                                          onChange={(e) => setTitle(e.target.value)} // Actualiza el estado con lo que escribe el usuario
                                          value={title} // Asigna el valor del estado al input
                                   />
                            </div>

                            <div className="col-4">
                                   <input className='form-control ' placeholder='Escribe la descripcion de la tarea'
                                          onChange={(e) => setDescription(e.target.value)}
                                          value={description}
                                   />
                            </div>

                            <div className="col-3">
                                   <button className='btn btn-outline-primary'>Guardar</button>
                            </div>
                     </form>
              </>
       )
}

// Exportamos el componente para usarlo en otros archivos
export default TaskForm;

