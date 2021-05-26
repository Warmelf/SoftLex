import React, { Component } from 'react';
import './Tasks.css';
            
class Tasks extends Component {
    state = {
        tasks: []
    }

    componentDidMount() {
        fetch('https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=Name')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                console.log(data.message.tasks);
                this.setState({ 
                    tasks: data.message.tasks
                })   
            }) 
    }
            
    render() {                
        return (
            <div>
                <ul>
                    {this.state.tasks.map((item) => {
                        return (
                            <li key={item.id} className="task">
                                Имя пользователя: {item.username}<br />
                                е-mail: {item.email}<br />
                                Текст задачи: {item.text}<br /> 
                                Статус задачи: {item.status}
                            </li>
                        );
                    })}
                
                </ul>
            </div>
        );
    }
}
 
export default Tasks;