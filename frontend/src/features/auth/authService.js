import axios from 'axios'

// API URL Configuration: Making a call out api/backend
const API_URL = '/api/users/'

// Register User
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Login User
const login = async (userData) => {

    const response = await axios.post(API_URL + 'login', userData)

    if (response.data) {
        // If the login is successful and the API responds with data, the user data is stored in localStorage
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Logout User
const logout = () => {
    // The logout function removes the user data from localStorage, effectively logging the user out.
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login,
}

export default authService