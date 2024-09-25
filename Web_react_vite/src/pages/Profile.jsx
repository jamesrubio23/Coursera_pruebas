import React from 'react';

const Profile = () => {
    const token = localStorage.getItem('token');

    // Podrías hacer una solicitud para obtener información del usuario usando el token aquí si lo deseas
    // Por ahora, vamos a mostrar un mensaje simple
    return (
        <div>
            <h1>My Profile</h1>
            {token ? (
                <p>Bienvenido a tu perfil. Aquí puedes gestionar tu información.</p>
            ) : (
                <p>No has iniciado sesión.</p>
            )}
        </div>
    );
};

export default Profile;
