import { useState } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'; // Asegúrate de importar useRoutes
import { AosProvider } from '../../Hooks/useAos';

//contexto
import { LogisticoProvider } from '../../Context';


//pages
import Home from './Home';

// Definición de las rutas
const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '*', element: <div>Página no encontrada</div> } // Ruta comodín para 404
  ]);

  return routes;
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LogisticoProvider>
        <AosProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </AosProvider>
      </LogisticoProvider>

    </>
  )
}

export default App
