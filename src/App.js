import Header from './Components/Header';
import Tasks from './Components/Tasks';
import AddTask  from './Components/AddTask';
import Footer from './Components/Footer';
import {useState} from 'react';


const App =()=>{

  const[showAddTask, setAddShowTask] = useState(false);

  const [tasks, setTasks] =useState([

    
    {
        id:1,
        text: 'Organize notes & update my drive',
        day: 'Feb 11 at 4:00pm',
        reminder: true
    },
    {
        id:2,
        text: 'Meeting at work',
        day: 'Feb 19 at 10:00am',
        reminder: true
    },
    {
        id:3,
        text: 'Gadget shopping',
        day: 'Feb 13 at 11:00am',
        reminder: true
    }
])

// Add Task
const addTask = (task) =>{
const id = Math.floor(Math.random() * 100 + 1)
const newTask = {id, ...task}
setTasks([newTask, ...tasks])

}


// delete task
const deleteTask = (id)=>{
setTasks(tasks.filter((task)=>task.id !== id))
}

// Task Reminder
const toggleReminder = (id) =>{
setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder}: task))
}

  return (

    
    <div className="App">
    
     <Header onAdd = {()=> setAddShowTask(!showAddTask)} showAdd ={showAddTask}/>

     {showAddTask && <AddTask onAdd ={addTask}/>}
    {tasks.length > 0? <Tasks tasks ={tasks} onDelete ={deleteTask} onToggle={toggleReminder} />: 'No tasks available'}
    <Footer/>
    </div>
  );

}
export default App;


