export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const CHANGE_STATUS = 'CHANGE_STATUS';
export const CHANGE_DETAIL = 'CHANGE_DETAIL';

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

export const removeTodo = (todoId) => ({
  type: REMOVE_TODO,
  todoId
});

export const changeStatus = (todoId) => ({
  type: CHANGE_STATUS,
  todoId
});

export const changeDetail = (todoId) => ({
  type: CHANGE_DETAIL,
  todoId
});
