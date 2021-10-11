import React, { useState } from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addTask, removeTask, completeTask, editTask } from '../action'
import './list.css'

const List = ({appState, addNewTask, removeTask, completeTask, editTask}) => {

    const [toadd_task, setToadd_task] = useState('') // pour add
    const [toEditTask, setToEditTask] = useState() // pour edit
    function handleAddTask() {
        const task = { title: toadd_task, done: false }
        addNewTask(task)
    }

    const handleRemoveTask = (index) => {
        removeTask(index)
    }

    const handleEdit = (index) => {
        if(toEditTask && index == toEditTask.index){
            editTask({id: toEditTask.index, title: toEditTask.value})
            setToEditTask()
        } else {
            setToEditTask({
                index: index,
                value: appState.tasks[index].title
            })
        }
    }

    // switch the task false (to mark it completed or not)
    const handleComplete = (index) => {
        completeTask(index)
    }



    return (
        <Col>
            <Row>
                <Form.Group as={Col} controlId="formBasicTask">
                    <Form.Control type="text" onChange={e => setToadd_task(e.currentTarget.value)} value={toadd_task} placeholder="Enter Task" />
                </Form.Group>
                <Col md>
                    <Button className="full" onClick={e => handleAddTask()} variant="primary" >
                        Add
                    </Button>
                </Col>
            </Row>
            <Row>
                <ul>
                    {appState.tasks.map((task, index) => (
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
                                        <Button className="full" variant="outline-success" onClick={e => handleComplete(index)}>{task.done ? 'uncomplete' : 'complete'}</Button>
                                    </Col>
                                    <Col>
                                        <Button className="full" variant="outline-danger" onClick={e => handleRemoveTask(index)}>Delete</Button>
                                    </Col>
                                    <Col>
                                        <Button className="full" variant={toEditTask && toEditTask.index == index ? "success" : "secondary"} onClick={e => handleEdit(index)}>{toEditTask && toEditTask.index == index ?  "save": "edit"}</Button>
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

const mapStateToProps = (state) => ({
    appState: state
})

const mapDispatchToProps = (dispatch) => ({
    addNewTask: (task) => dispatch(addTask(task)),
    removeTask: (id) => dispatch(removeTask(id)),
    completeTask: (id) => dispatch(completeTask(id)),
    editTask: ({id, title}) => dispatch(editTask({id, title}))
})

export default connect(mapStateToProps, mapDispatchToProps)(List)