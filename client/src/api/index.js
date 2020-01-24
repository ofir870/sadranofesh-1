
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
})
//user api

export const createUser = user => api.post(`/user`, user).then(() => { });
export const getUsers = () => api.post(`/get-users`)
export const updateUserById = (id, payload) => api.put(`/user/${id}`, payload)
export const deleteUserById = id => api.delete(`/user/${id}`)
export const getUserById = id => api.post(`/user-by-id/${id}`)

//roder api
export const createOrder = order => api.post(`/order`, order).then(() => { });
export const getOrders = () => api.post(`/get-orders`)
export const getNotAprovedOrders = () => api.post(`/get-not-aproved-orders`)
export const ordersAproved = (id, payload) => api.put(`/update-order/${id}`, payload)
export const deleteOrderById = id => api.delete(`/delete-order/${id}`)
export const getOrdersByUserName = username => api.post(`/get-orders-by-username/${username}`)



const apis = {
  createUser,
  createOrder,
  getUsers,
  getOrders,
  updateUserById,
  deleteUserById,
  getUserById,
  getNotAprovedOrders,
  ordersAproved,
  getOrdersByUserName
}

export default apis