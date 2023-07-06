import { FaTimes } from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder===true?'reminder': ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} <FaTimes style={{color:'#ff8f8f', cursor:'pointer'}} onClick={() => onDelete(task.id)}/></h3>
            <p>{new Date(task.day).toString()}</p>
        </div>
    )
}

export default Task