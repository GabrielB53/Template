import React, { useState, useEffect } from 'react'; // Importa React e hooks useState e useEffect
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'; // Importa componentes do Recharts para gráficos

// Dados para o gráfico, representando diferentes períodos ao longo da semana
const data = [
    { name: 'Segunda', Manha: 4000, Tarde: 2400, Noite: 2300 },
    { name: 'Terça', Manha: 3000, Tarde: 1398, Noite: 2210 },
    { name: 'Quarta', Manha: 2000, Tarde: 9800, Noite: 2290 },
    { name: 'Quinta', Manha: 2780, Tarde: 3908, Noite: 2000 },
    { name: 'Sexta', Manha: 1890, Tarde: 4800, Noite: 2181 }
];

// Define o componente funcional GraficoComTema
const GraficoComTema = () => {
    const [theme, setTheme] = useState('Claro'); // Estado para armazenar o tema

    // Recupera o tema do localStorage ao montar o componente
    useEffect(() => {
        const savedTheme = localStorage.getItem('tema') || 'Claro'; // Pega o tema salvo ou usa 'Claro' como padrão
        setTheme(savedTheme); // Atualiza o estado com o tema salvo
    }, []);

    // Definindo as cores do gráfico com base no tema
    const eixoColor = theme === 'Claro' ? '#000' : '#fff'; // Preto no tema claro, branco no escuro
    const gridColor = theme === 'Claro' ? '#ccc' : '#444'; // Cores da grade

    return (
        <ResponsiveContainer width="100%" height={400}> {/* Container responsivo para o gráfico */}
            <LineChart width={500} height={300} data={data}> {/* Componente do gráfico de linhas */}
                <CartesianGrid stroke={gridColor} strokeDasharray="3 3" /> {/* Grade do gráfico com cor baseada no tema */}
                <XAxis
                    dataKey="name" // Chave de dados para o eixo X
                    padding={{ left: 30, right: 30 }} // Espaçamento nos extremos do eixo
                    tick={{ fill: eixoColor }} // Cor dos labels do eixo X
                    stroke={eixoColor} // Cor da linha do eixo X
                />
                <YAxis
                    tick={{ fill: eixoColor }} // Cor dos labels do eixo Y
                    stroke={eixoColor} // Cor da linha do eixo Y
                />
                <Tooltip /> {/* Tooltip para exibir dados ao passar o mouse */}
                <Legend /> {/* Legenda para as linhas do gráfico */}
                {/* Linhas representando dados para manhã, tarde e noite */}
                <Line type="monotone" dataKey="Manha" stroke="#8884d8" /> {/* Linha da manhã */}
                <Line type="monotone" dataKey="Tarde" stroke="#82ca9d" /> {/* Linha da tarde */}
                <Line type="monotone" dataKey="Noite" stroke="#0000ff" /> {/* Linha da noite */}
            </LineChart>
        </ResponsiveContainer>
    );
};

export default GraficoComTema; // Exporta o componente GraficoComTema para uso em outros arquivos
