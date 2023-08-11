import './index.css'

const TodoItem = props => {
  const {eachItem, deleteTodo} = props
  const {title, id} = eachItem

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="eachTodoItem_container">
      <p> {title} </p>
      <button type="button" onClick={onDelete}>
        {' '}
        Delete{' '}
      </button>
    </li>
  )
}
export default TodoItem
