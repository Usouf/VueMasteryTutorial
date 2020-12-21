import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/Usouf/VueMasteryTutorial/',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

export default {
    getEvents() {
        return apiClient.get('/products')
    },
    getEvent(id) {
        return apiClient.get('/products/' + id + '/')
    }
}
