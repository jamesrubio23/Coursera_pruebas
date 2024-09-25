const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(express.json());

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Manejo de errores en la conexión a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ', err);
        process.exit(1); // Salir si no se puede conectar
    }
    console.log('Connected to the MySQL database');
});

// Ruta para el Sign Up
app.post('/api/signup', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Verificar si el usuario ya existe
        connection.query('SELECT * FROM users WHERE email = ?', [email], async (error, results) => {
            if (results.length > 0) {
                return res.status(400).json({ success: false, message: 'El usuario ya está registrado.' });
            }

            // Hashear la contraseña
            const hashedPassword = await bcrypt.hash(password, 10);

            // Insertar nuevo usuario en la base de datos
            connection.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword], (error, results) => {
                if (error) {
                    return res.status(500).json({ success: false, message: 'Error al registrar el usuario.' });
                }
                res.status(201).json({ success: true, message: 'Usuario registrado exitosamente.' });
            });
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error en el servidor.' });
    }
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});

