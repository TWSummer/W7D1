import React from 'react';

class TodoDetailView extends React.Component {
  constructor(props) {
    super(props);

  }

  removeItem(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.todo.id);
  }

  render() {
    return (
      <div>
        <p>{this.props.todo.body}</p>
        <button onClick={this.removeItem.bind(this)}>Remove Item</button>
      </div>
    );
  }

}

export default TodoDetailView;
