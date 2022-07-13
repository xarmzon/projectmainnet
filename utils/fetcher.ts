import axios from 'axios'
import { CONFIG } from './constants'

const api = axios.create({
  baseURL: CONFIG.server,
})

export default api
