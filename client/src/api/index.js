
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
export const getUserByUserName = (username, password) => api.post(`/get-user-by-username/${username}/${password}`)


//order api

export const createOrder = order => api.post(`/order`, order).then(() => { });
export const getOrders = () => api.post(`/get-orders`)
export const getNotAprovedOrders = () => api.post(`/get-not-aproved-orders`)
export const getAprovedOrders = () => api.post(`/get-aproved-orders`)
export const ordersAproved = (id, payload) => api.put(`/update-order/${id}`, payload)
export const deleteOrderById = id => api.delete(`/delete-order/${id}`)
export const getOrdersByUserName = username => api.post(`/get-orders-by-username/${username}`)

// messages api

export const createGlobalMessage = message => api.post(`/global-messages`, message).then(() => { });
export const getMessages = () => api.post(`/global-messages/get-messages`)

// export const createGlobalMessage = globalMessage => api.post(`/global-messages`, message).then(() => { });


const apis = {
  createUser,
  createOrder,
  getUsers,
  getOrders,
  updateUserById,
  deleteUserById,
  deleteOrderById,
  getUserById,
  getNotAprovedOrders,
  getAprovedOrders,
  ordersAproved,
  getOrdersByUserName,
  getUserByUserName
  , getMessages,
  createGlobalMessage
  // createGlobalMessage
}

export default apis