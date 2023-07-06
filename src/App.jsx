import { useState } from "react"

import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: "Doctor's Appointment",
        day: "2023-02-05T14:30",
        reminder: true
      },
      {
        id: 2,
        text: "Grocery shopping @Krogers'",
        day: "2023-02-06T12:30",
        reminder: true
      },
      {
        id: 3,
        text: "Get dry cleaning",
        day: "2023-02-06T16:00",
        reminder: false
      },
      {
        id: 4,
        text: "Mow the lawn.",
        day: "2023-02-06T16:30",
        reminder: false
      }
    ]
  )

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header title='Task Tracker' />
      {tasks.length > 0 ? <Tasks taskList={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks to show...'}
    </div>
  );
}

export default App;
