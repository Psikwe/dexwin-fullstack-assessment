import { useEffect, useState } from 'react';
import { getTasks, updateTaskStatus } from '../api/client';
import TaskItem from './TaskItem';
import {Task} from "../types"

export default function TaskBoard({ projectId }:{projectId: number}) {
  const [tasks, setTasks] = useState<Task>([]);
    const [loading,setLoading] = useState(true)
  const [error,setError] = useState<string | null>()
    


  useEffect(() => {
    getTasks(projectId).then((data) => {
      console.log("tasks: ", data)
      setTasks(data);
    });
  }, []);

  const handleToggle = (task) => {
    const next = task.status === 'DONE' ? 'TODO' : 'DONE';
    task.status = next;
    setTasks(tasks);
    updateTaskStatus(task.id, next);
  };

  return (
    <div>
      <div className="board-header">
        <h2>Tasks</h2>
        <span className="task-count">{tasks.length}</span>
      </div>
      <div className="task-list">
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} onToggle={handleToggle} />
        ))}
      </div>
    </div>
  );
}
