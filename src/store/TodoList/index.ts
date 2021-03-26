import useSWR from 'swr'
import { fetchTodoList } from '~/api/todolist'
import { Todo } from '~/types/Todo'

export const useTodoList = () => {
  const { data: todoList } = useSWR<Todo[]>('/fetchTodoList', fetchTodoList)

  return { todoList }
}
