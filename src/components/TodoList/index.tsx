import { ChangeEvent } from 'react'
import { useTodoList } from '~/store/TodoList'

export const TodoList: React.FC = () => {
  const { todoList, value, setValue, onUpdateTodoList } = useTodoList()

  if (!todoList) return null

  return (
    <>
      <input
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setValue(event.target.value)
        }}
      />
      <button onClick={() => onUpdateTodoList()}>追加</button>
      {todoList.map((todo) => (
        <ul key={todo.id}>
          <li>{todo.value}</li>
        </ul>
      ))}
    </>
  )
}
