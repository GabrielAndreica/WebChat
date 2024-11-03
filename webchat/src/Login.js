import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logica de autentificare (ex: apel API)
        // Dacă autentificarea este reușită, redirecționează utilizatorul
        // navigate('/home');
        // Dacă nu, setează mesajul de eroare
        setError('Credențiale invalide. Te rog încearcă din nou.');
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Utilizator:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Parolă:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <button type="submit">Autentificare</button>
                </div>
                {error && <p className="error">{error}</p>}
                <div>
                    <p>Nu ai un cont? <a href="/register">Înscrie-te aici</a></p>
                </div>
            </form>
        </div>
    );
};

export default Login;
