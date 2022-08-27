import { toggled } from "../actions"

const updateStatus = (todoId, currentStatus) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: "PATCH",
            body: JSON.stringify({
                completed: !currentStatus
            }),
            headers: {
                "Content-type" : "application/json; charset=UTF-8"
            }
        })
        const todo = await res.json()

        dispatch(toggled(todo.id))
    }

}
export default updateStatus