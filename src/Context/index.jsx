//importaciones react
import React, { useState, useEffect } from 'react';

const LogisticoContext = React.createContext();

function LogisticoProvider({ children }) {
    //estado para el dark mode
    const [isDark, setIsDark] = useState(true);
    const toggleDarkMode = () => { setIsDark(!isDark); };

    //Al iniciar el componente (solo la primera vez), lee si el usuario ya tiene una preferencia de tema guardada en localStorage ('dark' o 'light').
    //Carga la preferencia (del localStorage o del sistema).
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme'); // Lee la preferencia guardada en localStorage
        if (savedTheme) {
            setIsDark(savedTheme === 'dark');  // Aplica la preferencia guardada: 'dark' o 'light'
        } else {
            // Si no hay preferencia guardada, detecta la preferencia del sistema operativo
            setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
    }, []);

    //Manipulacion Cada vez que isDark cambie Aplica y guarda la preferencia cada vez que cambias el modo.
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark'); // Añade la clase 'dark' al <html>
            localStorage.setItem('theme', 'dark');           // Guarda la preferencia en localStorage
        } else {
            document.documentElement.classList.remove('dark'); // Remueve la clase 'dark'
            localStorage.setItem('theme', 'light');             // Guarda la preferencia como 'light'
        }
    }, [isDark]);


    return (
        <LogisticoContext.Provider value={{
            isDark, setIsDark, toggleDarkMode,
        }}>
            {children}
        </LogisticoContext.Provider>
    )
}

export { LogisticoContext, LogisticoProvider };