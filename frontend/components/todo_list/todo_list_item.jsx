import React from 'react';
import TodoDetailView from './todo_detail_view';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.detail = false;
  }

  removeItem(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.todo.id);
  }

  changeStatus(e) {
    e.preventDefault();
    this.props.changeStatus(this.props.todo.id);
  }

  changeDetail(e) {
    e.preventDefault();
    this.props.changeDetail(this.props.todo.id);
  }

  render() {
    let buttontext = "";
    if (this.props.todo.done) {
      buttontext = "Done";
    } else {
      buttontext = "Undo";
    }
    let detail = "";
    if (this.props.todo.detail) {
      detail = <TodoDetailView todo={this.props.todo}/>;
    }

    return (
      <div>
        <li onClick={this.changeDetail.bind(this)}>{this.props.todo.title}</li>
        <button onClick={this.changeStatus.bind(this)}>{buttontext}</button>
        {detail}
      </div>
    );
  }
}


export default TodoListItem;
