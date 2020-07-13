import server from '../../api';
export const FETCH_TODOS = 'FETCH_TODOS';
export const SET_MESSAGE = 'SET_MESSAGE';

export const fetchTodos = () => {
  return (dispatch) => {
    server.get('/todos', {
      headers: {

      }
    })
      .then(({ data }) => {
        dispatch(fetchTodoSuccess(data.Todos));
      })
      .catch(err => {
        dispatch(setMessage(err.message))
      })
  }
}

export const fetchTodoSuccess = (payload) => {
  return {
    type: FETCH_TODOS,
    payload
  }
}

export const setMessage = (payload) => {
  return {
    type: SET_MESSAGE,
    payload
  }
}