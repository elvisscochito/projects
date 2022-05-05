import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
//If token es válido
    const token = localStorage.getItem('token')
    if(!token)
        return <Navigate to='/' />
    return children
}

export default ProtectedRoute;
