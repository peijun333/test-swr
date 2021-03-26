import { useTodoList } from '~/store/TodoList'

export const TodoList: React.FC = () => {
  const { todoList } = useTodoList()

  if (!todoList) return null

  return (
    <>
      {todoList.map((todo) => (
        <ul key={todo.id}>
          <li>{todo.value}</li>
        </ul>
      ))}
    </>
  )
}
