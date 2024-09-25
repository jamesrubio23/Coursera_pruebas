import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token');

    // Si no hay token, redirige al login
    if (!token) {
        return <Navigate to="/login" />;
    }

    // Si hay token, permite el acceso al componente hijo (Profile)
    return children;
};

export default ProtectedRoute;
