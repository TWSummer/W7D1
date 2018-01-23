import { connect } from 'react-redux';
import TodoList from './todo_list';
import allTodos from '../../reducers/selectors';
import { receiveTodo, changeStatus, changeDetail }
  from '../../actions/todo_actions';


const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  changeStatus: (todoId) => dispatch(changeStatus(todoId)),
  changeDetail: (todoId) => dispatch(changeDetail(todoId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
