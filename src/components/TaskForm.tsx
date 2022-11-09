
import { ChangeEvent, FormEvent, useState } from "react"
import { Task } from "../interfaces/Task"

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
interface Props {
  addANewTask: (task: Task) => void
}

const initialState = {
  title: '',
  description: ''
}

export const TaskForm = ({ addANewTask }: Props) => {
  const [task, setTask] = useState(initialState)

  const handleInputChange = ({
    target: { name, value },
  }: HandleInputChange) => {
    setTask({ ...task, [name]: value })
  }

  const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addANewTask(task)
    setTask(initialState)
  }

  return (
    <div className="card card-body bg-secondary text-dark">
      <h1>Añadir Tarea</h1>
      <form onSubmit={handleNewTask} >
        <input
          type="text"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          placeholder="Esriba un titulo"
          name="title"
          onChange={handleInputChange}
          value={task.title}
        />
        <textarea
          name="description"
          rows={2}
          placeholder="Escriba una descripcion"
          className="form-control mb-3 shadow-none border-0"
          onChange={handleInputChange}
          value={task.description}
        ></textarea>
        <button className="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  )
}