import server from '../../api';
export const FETCH_TODOS = 'FETCH_TODOS';
export const SET_MESSAGE = 'SET_MESSAGE';
export const FETCH_REQUEST = 'FETCH_REQUEST';

export const fetchTodos = (token) => {
  return (dispatch) => {
    dispatch(fetchRequest(true));
    server.get('/todos', {
      headers: {
        token
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

export const fetchRequest = (payload) => {
  return {
    type: FETCH_REQUEST,
    payload
  }
}

export const setMessage = (payload) => {
  return {
    type: SET_MESSAGE,
    payload
  }
}

export const addNewTodo = (token, payload) => {
  return (dispatch) => {
    server.post('/todos', {
        title: payload.title,
        description: payload.description,
        status: payload.status,
        due_date: payload.due_date
      }, {
        headers: {
          token
        }
      })
      .then(result => {
        dispatch(fetchTodos(token));
      })
      .catch(err => {
        dispatch(setMessage(err.message))
      })
  }
}

export const updateTodo = (token, payload) => {
  return (dispatch) => {
    server.put(`/todos/${payload.id}`, {
      title: payload.title,
      description: payload.description,
      status: payload.status,
      due_date: payload.due_date
    }, {
      headers: {
        token
      }
    })
      .then(result => {
        dispatch(fetchTodos(token));
      })
      .catch(err => {
        dispatch(setMessage(err.message));
      });
  }
}