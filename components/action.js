export const changeHandler = (payload) => {
    return {
        type: "CHANGER", payload
    }
}
export const addTodo = () => {
    return {
        type: "ADD"
    }
}

export const completeTodo = (payload) => {
    return {
        type: "COMPLET", payload
    }
}

export const deletes = (payload) => {
    return {
        type: "DELETE", payload
    }
}

export const edit = (payload) => {
    return {
        type: "EDIT", payload
    }
}

export const updatetask = (payload) => {
    console.log(payload)
    return {
        type: "UPDATE",
        payload
    }
}