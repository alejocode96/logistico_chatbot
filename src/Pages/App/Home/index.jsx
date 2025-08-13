import React from 'react';

//components
import Header from '../../../Components/Home/header';
import WhoIsLogistico from '../../../Components/Home/whoIsLogistico';
import ToDoLogistico from '../../../Components/Home/toDoLogistico';
import HowToAsk from '../../../Components/Home/howToAsk';

function Home() {
    return (
        <>
            <main className='bg-white dark:bg-[#09090B] w-full'>
                <Header></Header>
                {/* fondo azul */}
                <div className="h-full absolute inset-0 z-10 bg-[image:radial-gradient(80%_50%_at_50%_-20%,hsl(206,81.9%,65.3%,0.5),rgba(255,255,255,0))]"></div>
                {/* svg a cuadros */}
                <svg className="absolute inset-0 z-10 h-full w-full text-zinc-900/15 dark:text-white/10 [mask-image:radial-gradient(90%_50%_at_top_center,white,transparent)]" width="100%" height="100%" aria-hidden="true">
                    <defs>
                        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" />
                        </pattern>

                        <pattern id="highlightGrid" width="560" height="480" patternUnits="userSpaceOnUse">
                            <rect x="160" y="80" width="80" height="80" fill="rgba(100,100,100,0.2)" />
                            <rect x="400" y="240" width="80" height="80" fill="rgba(100,100,100,0.15)" />
                            <rect x="80" y="320" width="80" height="80" fill="rgba(100,100,100,0.1)" />
                            <rect x="320" y="160" width="80" height="80" fill="rgba(100,100,100,0.12)" />
                            <rect x="480" y="0" width="80" height="80" fill="rgba(100,100,100,0.14)" />
                            <rect x="0" y="240" width="80" height="80" fill="rgba(100,100,100,0.11)" />
                            <rect x="240" y="400" width="80" height="80" fill="rgba(100,100,100,0.13)" />
                        </pattern>

                        <radialGradient id="fade" cx="50%" cy="0%" r="75%">
                            <stop offset="0%" stopColor="white" stopOpacity="1" />
                            <stop offset="100%" stopColor="white" stopOpacity="0" />
                        </radialGradient>

                        <mask id="fadeMask">
                            <rect width="100%" height="100%" fill="url(#fade)" />
                        </mask>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#highlightGrid)" mask="url(#fadeMask)" opacity="0.6" className="animate-pulse" />
                    <rect width="100%" height="100%" fill="url(#grid)" mask="url(#fadeMask)" />
                </svg>
                {/* Conece a logistico */}
                <WhoIsLogistico></WhoIsLogistico>

                {/* lo que puedes hacer con  logistico */}
                <ToDoLogistico></ToDoLogistico>

                {/* como preguntarle a  logistico */}
                <HowToAsk></HowToAsk>
            </main>
            {/* footer */}
            <footer className="w-full isolate mx-auto max-w-7xl p-6 pb-12 pt-16 lg:px-8 " data-aos="fade-up">
                <div className="border-t border-zinc-300 dark:border-white/10 pt-4 md:flex md:items-center md:justify-between">
                    <div className="mt-8 flex items-center gap-4 text-xs font-medium leading-5 text-zinc-700 dark:text-zinc-400 max-md:flex-col md:order-1 md:mt-0">
                        <div className="order-2 md:order-1">
                            <p className="">© 2025 by Alejandro Galeano Madrigal.</p>
                        </div>
                        <div className="order-1 flex gap-4 md:order-2">
                            <a className="transition-colors duration-200 dark:hover:text-zinc-300 hover:text-zinc-900" href="/legal/privacy">Privacy Policy</a>
                            <a className="transition-colors duration-200 dark:hover:text-zinc-300 hover:text-zinc-900" href="/legal/terms">Terms of Use</a>
                        </div>
                    </div>
                </div>
                <div className="mt-4 w-full text-xs leading-5 dark:text-zinc-500 text-zinc-600 max-md:text-center md:max-w-[60%]">
                    <p>Logitico es una marca no comercial. Cualquier otra marca mencionada pertenece a sus respectivos propietarios. Salvo que se indique lo contrario, el uso de logotipos de terceros no implica respaldo, patrocinio ni afiliación con Logistico.</p>
                    <p className="mt-2">Logitico es un asistente conversacional especializado en logística, y no una empresa dedicada al transporte. Ciertas funcionalidades pueden estar integradas con servicios de terceros autorizados, según los requerimientos del usuario.</p>
                </div>
            </footer>
        </>

    )
}

export default Home