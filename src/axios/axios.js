import axios from 'axios'
import router from '../router'

const requestAxios = axios.create({
  baseURL: 'https://angular-blog-fe2ec.firebaseio.com/'
})

requestAxios.interceptors.response.use(null, error => {
  if (error.response.status == 401) {
    router.push('/modules?message=modules')
  }

  return Promise.reject(error)
})

export default requestAxios
