import { httpClient } from '~/lib/httpClient'
import { Todo } from '~/types/Todo'

export const fetchTodoList = async (): Promise<Todo[]> => {
  const { data } = await httpClient.get('/todos')
  return data
}
