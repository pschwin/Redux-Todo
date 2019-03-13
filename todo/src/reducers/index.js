import {UPDATE_NAME, ADD_TODO} from '../actions';

const initialState ={
    name: 'What to-do-today-2',
    todos:[
        {task: 'Clean', completed: false},
        {task: 'Eat', completed: false},
        {task: 'Whisper Sweet Nothings to my Squirrel', completed: true}
    ]
}

function reducer (state = initialState, action){
    switch (action.type) {
        case UPDATE_NAME:
        return{
            ...state,
            name: action.payload
        }

        default:
            return state;
    }
}

export default reducer;