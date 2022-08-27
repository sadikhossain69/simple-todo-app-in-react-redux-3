import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TOGGLED, LOADED } from "./actionTypes"

export const loaded = todos => {
    return {
        type: LOADED,
        payload: todos,
    }
}

export const added = todoTask => {
    return {
        type: ADDED,
        payload: todoTask,
    }
}

export const toggled = todoId => {
    return {
        type: TOGGLED,
        payload: todoId,
    }
}

export const colorselected = (todoId, color) => {
    return {
        type: COLORSELECTED,
        payload: {
            todoId: todoId,
            color: color,
        }
    }
}

export const deleted = (todoId) => {
    return {
        type: DELETED,
        payload: todoId
    }
}

export const allCompleted = () => {
    return {
        type: ALLCOMPLETED,
    }
}

export const clearCompleted = () => {
    return {
        type: CLEARCOMPLETED,
    }
}