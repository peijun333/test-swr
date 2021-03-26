import axios from 'axios'
import { BASE_URL } from '~/constants/env'

export const httpClient = axios.create({
  baseURL: BASE_URL,
})
