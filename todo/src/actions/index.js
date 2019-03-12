export const UPDATE_NAME = "UPDATE_NAME";

export function updateName(newName){
    return{
        type: UPDATE_NAME,
        payload: newName
    }
}


export const ADD_TODO = 'ADD_TODO';

export function addNewTodo(newTodo){
    return{
        type: ADD_TODO,
        payload: newTodo
    };
}

const actionCreatorCall = addNewTodo("Milk my almonds");
//check
console.log(actionCreatorCall);