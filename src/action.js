export const addTask = (task) => ({
    type: 'ADD_TASK',
    task,
})

export const removeTask = (id) => ({
    type: "REMOVE_TASK",
    id,
})

export const completeTask = (id) => ({
    type: "COMPLETE_TASK",
    id,
})

export const editTask = ({id, title}) => ({
    type: 'EDIT_TASK',
    id,
    title
})