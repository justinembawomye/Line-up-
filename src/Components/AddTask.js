import {useState} from 'react';

const AddTask = ({onAdd}) => {

    const  [text, setText] = useState('');
    const  [day, setDate] = useState('');
    const  [reminder, setReminder] = useState(false);

    // Submit
    const onSubmit = (e) => {
        e.preventDefault()
    
        if (!text) {
          alert('Please add a task')
          return
        }
    
        onAdd({text, day, reminder})
    
        setText('')
        setDate('')
        setReminder(false)
      }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Title</label>
                <input type="text" placeholder="Add task"  value={text}onChange={(e) =>setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Day</label>
                <input type="date" placeholder="select date" value={day} onChange={(e) => setDate(e.target.value)}/>
            </div>
            <div className="form-control-check">
                <label>Reminder</label>
                <input type="checkbox" value={reminder} checked={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
            </div>
            <input type="submit" value ="save" className="btn btn-block"/>
        </form>
    )
}


export default AddTask