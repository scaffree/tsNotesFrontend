import { Task } from "../interfaces/Task"
import { TaskCard } from "./TaskCard"

interface Props {
  tasks: Task[]
}

export default function TaskList({ tasks }: Props) {
  return (
    <>
      {
        tasks.map((res, index) =>
          <div className="col-md-4 pb-2">
            <TaskCard task={res} />

          </div>
        )
      }
    </>
  )
}
