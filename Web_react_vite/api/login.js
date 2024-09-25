const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connection = require('./db'); // Asegúrate de importar la conexión a tu base de datos
require('dotenv').config();

const app = express();
app.use(express.json());

// Ruta para manejar el login de usuarios
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    // Buscar el usuario por email en la base de datos
    connection.query('SELECT * FROM users WHERE email = ?', [email], async (error, results) => {
        if (error || results.length === 0) {
            return res.status(401).json({ success: false, message: 'Usuario no encontrado' });
        }

        const user = results[0];

        // Comparar la contraseña hasheada almacenada con la proporcionada por el usuario
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ success: false, message: 'Contraseña incorrecta' });
        }

        // Crear un token JWT si las credenciales son correctas
        const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '1h' });

        // Enviar el token al cliente
        res.json({ success: true, token });
    });
});

// Iniciar el servidor
app.listen(3001, () => {
    console.log('Servidor ejecutándose en el puerto 3001');
});
