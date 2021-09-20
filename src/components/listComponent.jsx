import React, { useState } from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'
import './list.css'
const List = () => {
    const [tasks, setTasks] = useState([
        {
            title: 'Learn component',
            done: false
        },
        {
            title: 'Learn props',
            done: false
        },
        {
            title: 'Learn state',
            done: false
        },
        {
            title: 'Learn html',
            done: false
        },
        {
            title: 'Learn state',
            done: false
        }
    ])
    const [toadd_task, setToadd_task] = useState('')
    const [toEditTask, setToEditTask] = useState()

    const handleEditClick = (index) => {
        if(toEditTask && index == toEditTask.index){
            const new_tasks = [...tasks]
            new_tasks[index].title = toEditTask.value
            setTasks(new_tasks)
            setToEditTask()
        } else {
            setToEditTask({
                index: index,
                value: tasks[index].title
            })
        }
    }

    // switch the task false (to mark it completed or not)
    const handleClick = (index) => {
        let new_tasks = [...tasks]; // to get values not reference
        new_tasks[index].done = !new_tasks[index].done
        setTasks(new_tasks)
    }

    // add task to the list
    const addTask = () => {
        setTasks([...tasks, { title: toadd_task, done: false }])
    }

    // remove task from tasks list
    const removeTask = (index) => {
        let new_tasks = [...tasks]; // to get values not reference
        new_tasks.splice(index, 1)
        setTasks(new_tasks)
    }


    return (
        <Col>
            <Row>
                <Form.Group as={Col} controlId="formBasicTask">
                    <Form.Control type="text" onChange={e => setToadd_task(e.currentTarget.value)} value={toadd_task} placeholder="Enter Task" />
                </Form.Group>
                <Col md>
                    <Button className="full" onClick={e => addTask()} variant="primary" >
                        Add
                    </Button>
                </Col>
            </Row>
            <Row>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index} className={task.done ? "done" : "still"}>
                            <Col>
                                <Row>
                                    <h4>{task.title}</h4>
                                </Row>
                                {toEditTask && toEditTask.index == index && <Row>
                                    <Form.Control type="text" onChange={e => setToEditTask({...toEditTask, value: e.currentTarget.value})} value={toEditTask.value} placeholder="Enter Task" />
                                </Row>}
                                <Row>
                                    <Col>
                                        <Button className="full" variant="outline-success" onClick={e => handleClick(index)}>Complete</Button>
                                    </Col>
                                    <Col>
                                        <Button className="full" variant="outline-danger" onClick={e => removeTask(index)}>Delete</Button>
                                    </Col>
                                    <Col>
                                        <Button className="full" variant="primary" onClick={e => handleEditClick(index)}>Edit</Button>
                                    </Col>
                                </Row>
                                <Row>
                                </Row>
                            </Col>
                        </li>
                    ))}
                </ul>
            </Row>
        </Col>
    )

}

export default List