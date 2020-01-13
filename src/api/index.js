
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export const createUser = user => api.post(`/user`, user).then(() => {
  
  });
export const getUsers = () => api.post(`/get-users`)
export const updateUserById = (id, payload) => api.put(`/user/${id}`, payload)
export const deleteUserById = id => api.delete(`/user/${id}`)
export const getUserById = id => api.post(`/user-by-id/${id}`)

const apis = {
    createUser,
    getUsers,
    updateUserById,
    deleteUserById,
    getUserById,
}

export default apis