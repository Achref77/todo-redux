
const initialState = {
    input: "",
    todos: []

}

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        /////////////////////changeHandler////////////////////

        case "CHANGER":
            return { ...state, input: action.payload }

        /////////////////////addTodo/////////////////////////

        case "ADD":
            return { ...state, todos: [...state.todos, { text: state.input }], input: '' }

        /////////////////////COMPLET/////////////////////////        

        case "COMPLET":
            return { ...state, todos: state.todos.map((el, i) => i === action.payload ? { ...el, isComplete: !el.isComplete } : el) }

        /////////////////////DELETE///////////////////////// 

        case "DELETE":
            return { ...state, todos: state.todos.filter((el, i) => i !== action.payload) }

        /////////////////////EDIT///////////////////////// 

        // case "EDIT":
        //     return { ...state, title: action.payload }

        /////////////////////addmodif/////////////////////////

        case "UPDATE":
            return { ...state, todos: state.todos.map((el, i) => i === action.payload.id ? { ...el, text: action.payload.task } : el) }

        /////////////////////default/////////////////////////    

        default:
            return state

    }


}
