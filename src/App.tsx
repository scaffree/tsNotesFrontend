import { useState } from 'react';
import { TaskForm } from './components/TaskForm';
import TaskList from './components/TaskList';
import { Task } from './interfaces/Task';

interface Props {
  title: string
}



export function App({ title }: Props) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Tarea en typescript",
      description: "dthtr ut ut yutr ju trutrsu",
      completed: true
    }
  ])
  const addNewTask=(task:Task)=> {
    setTasks([...tasks,task])
  }

  return (

    <div className='bg-dark text-white' style={{ height: '100vh' }}>
      <nav className='navbar navbar-dark bg-primary'>
        <div className="container">
          <a href="" className='navbar-brand'>

            <h1>{title}</h1>

          </a>
        </div>
      </nav>
      <main className="container p-4">
        <div className="row">

          <div className="col-md-4">
            <TaskForm addANewTask={addNewTask} />
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} />
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

