const initialState = {
    tasks: [
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
    ]
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: state.tasks.concat(action.task)
            }
        case 'REMOVE_TASK':
            let newtasks = [...state.tasks]
            newtasks.splice(action.id, 1)
            return {
                ...state,
                tasks: newtasks
            }
        case 'COMPLETE_TASK':
            let cpmtasks = [...state.tasks]
            cpmtasks[action.id].done = !state.tasks[action.id].done
            return {
                ...state,
                tasks: cpmtasks
            }
        case 'EDIT_TASK':
            let edttasks = [...state.tasks]
            edttasks[action.id].title = action.title
            return {
                ...state,
                tasks: edttasks
            }
        default:
            return state;
    }
}

export default appReducer;