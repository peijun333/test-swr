import { useState } from 'react'
import useSWR from 'swr'
import { fetchTodoList, updateTodoList } from '~/api/todolist'
import { Todo } from '~/types/Todo'

export const useTodoList = () => {
  const [value, setValue] = useState('')
  const { data: todoList, mutate } = useSWR<Todo[]>('/fetchTodoList', fetchTodoList)

  const onUpdateTodoList = async () => {
    await updateTodoList(value)
    setValue('')
    // ここでrefetchしているので二回リクエストが飛ぶことになる。
    mutate()
  }
  return { todoList, value, setValue, onUpdateTodoList }
}
