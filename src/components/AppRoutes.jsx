import { Routes, Route } from "react-router-dom"; // Importa os componentes Routes e Route para gerenciamento de rotas
import App from "../templates/App/App"; // Importa o componente principal da aplicação
import Home from "../templates/Home/Home"; // Importa o componente Home

import ForgotPass from "../templates/Login/ForgotPass"; // Importa o componente para recuperação de senha
import Login from "../templates/Login/Login"; // Importa o componente de login

import Mensagem from "../templates/Mensagem/Mensagem"; // Importa o componente de mensagens
import MensagemLer from "../templates/Mensagem/MensagemLer"; // Importa o componente para ler mensagens

import Usuario from "../templates/Usuario/Usuario"; // Importa o componente de usuários
import UsuarioEditar from "../templates/Usuario/UsuarioEditar"; // Importa o componente para editar usuários
import UsuarioNovo from "../templates/Usuario/UsuarioNovo"; // Importa o componente para adicionar novos usuários
import UsuariosLista from "../templates/Usuario/UsuariosLista"; // Importa o componente que lista usuários

import Grafico from "../templates/Graph/Grafico"; // Importa o componente gráfico

import UsuarioDeletar from "../templates/Usuario/UsuarioDeletar"; // Importa o componente para deletar usuários

// Define o componente funcional AppRoutes
const AppRoutes = () => {
  return (
    <div>
      <Routes> {/* Componente que encapsula todas as rotas da aplicação */}
        <Route path="/" element={<App />} /> {/* Rota para a página inicial */}
        <Route path="/home" element={<Home />} /> {/* Rota para a página Home */}
        <Route path="/login" element={<Login />} /> {/* Rota para a página de login */}
        <Route path="/forgotpass" element={<ForgotPass />} /> {/* Rota para a recuperação de senha */}

        <Route path="/mensagem" element={<Mensagem />} /> {/* Rota para a página de mensagens */}
        <Route path="/mensagemler" element={<MensagemLer />} /> {/* Rota para ler mensagens */}

        <Route path="/usuario" element={<Usuario />} /> {/* Rota para a página de usuários */}
        <Route path="/usuarioslista" element={<UsuariosLista />} /> {/* Rota para listar usuários */}
        <Route path="/usuarionovo" element={<UsuarioNovo />} /> {/* Rota para adicionar um novo usuário */}
        <Route path="/usuarioeditar" element={<UsuarioEditar />} /> {/* Rota para editar um usuário */}
        <Route path="/usuariodeletar" element={<UsuarioDeletar />} /> {/* Rota para deletar um usuário */}
        
        <Route path="/grafico" element={<Grafico />} /> {/* Rota para a página de gráfico */}

      </Routes>
    </div>
  );
}

export default AppRoutes; // Exporta o componente AppRoutes para uso em outros arquivos
