import React from 'react';
import TodoForm from '../todo_list/todo_form';
import TodoListItem from '../todo_list/todo_list_item';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.todos.map( (todo, idx) => {
            return <TodoListItem key={todo.id}
                                 todo={todo}
                                 changeStatus={this.props.changeStatus}
                                 changeDetail={this.props.changeDetail}/>;
          })
        }
        </ul>
        <TodoForm receiveTodo={this.props.receiveTodo}/>
      </div>
    );
  }
}

export default TodoList;

// module.exports = ({todos, receiveTodo, removeTodo}) => {
//   return (
//     <div>
//       <ul>
//         {todos.map( (todo, idx) => {
//           return <li key={idx}>{ todo.title }</li>;
//         })}
//       </ul>
//       <TodoForm receiveTodo={receiveTodo}/>
//     </div>
//   );
// };
