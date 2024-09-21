import React from 'react';
import './App.css';
import '../../components/Carousel/Style.css';
import Navbar from '../../components/Navbar/Navegacao';
import Caarousel from '../../components/Carousel/Nsei';
import Login from '../../components/Botoes/LoginButton';
import SectionContent from '../../components/Secoes/SectionContent';
import { ThemeProvider } from '../../contexts/ThemeContext'; // Importe o ThemeProvider

function App() {
    const OPTIONS = {};
    const SLIDE_COUNT = 5;
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

    return (
        <ThemeProvider> {/* Envolva toda a aplicação no ThemeProvider */}
            <div className="opa">
                <nav>
                    <Navbar />
                </nav>
                <div className="container mb-5 ">
                    <h1 className="text-center fw-bold m-4">Bem-vindo ao SGM!</h1>
                    <section className="uepa">
                        <Caarousel slides={SLIDES} options={OPTIONS} />
                    </section>
                </div>
                <main className="container">
                    <SectionContent />
                </main>

                <footer>
                    <Login />
                </footer>
            </div>
        </ThemeProvider>
    );
}

export default App;
