import { Link, useNavigate } from "react-router-dom"; // Importa componentes para navegação
import Box from '@mui/material/Box'; // Importa o componente Box do Material-UI
import './Login.css'; // Importa o arquivo de estilos CSS para este componente
import React, { useState, useEffect } from 'react'; // Importa React e hooks
import TextField from '@mui/material/TextField'; // Importa o componente de campo de texto
import Button from '@mui/material/Button'; // Importa o componente de botão
import Container from '@mui/material/Container'; // Importa o componente de contêiner
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'; // Importa o ícone de bloqueio
import Typography from '@mui/material/Typography'; // Importa o componente de tipografia
import { useFormik } from 'formik'; // Importa o hook para gerenciamento de formulários
import Avatar from '@mui/material/Avatar'; // Importa o componente Avatar
import * as yup from 'yup'; // Importa a biblioteca Yup para validação de esquema

// Definição do esquema de validação para o formulário
const validationSchema = yup.object({
    email: yup
      .string('Digite seu email') // Mensagem padrão
      .matches(
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, // Regex para validar email
        'Digite um email válido' // Mensagem de erro
      )
      .required('Email necessário'), // Mensagem de erro se o campo for vazio
    password: yup
      .string('Digite sua senha') // Mensagem padrão
      .min(8, 'A senha deve ter um tamanho mínimo de 8 letras') // Validação mínima de caracteres
      .required('Senha necessária'), // Mensagem de erro se o campo for vazio
});

// Componente de Login
const Login = () => {
    const navigate = useNavigate(); // Hook para navegação

    const [theme, setTheme] = useState('Claro'); // Estado para o tema atual

    // Efeito colateral para carregar o tema salvo no localStorage ao montar o componente
    useEffect(() => {
      const savedTheme = localStorage.getItem('tema') || 'Claro'; // Obtém o tema salvo ou usa 'Claro'
      setTheme(savedTheme); // Atualiza o estado com o tema
    }, []);
  
    // Define cores com base no tema atual
    const buttonColor = theme === 'Claro' ? 'primary' : 'error';
    const avatarBgColor = theme === 'Claro' ? 'primary.main' : 'error.main';
    const textColor = theme === 'Claro' ? '' : 'white';

    // Configuração do Formik para gerenciamento de formulário
    const formik = useFormik({
        initialValues: {
            email: 'Exemplo@Gmail.com', // Valor inicial do email
            password: 'foobar', // Valor inicial da senha
        },
        validationSchema: validationSchema, // Schema de validação
        onSubmit: (values) => {
            navigate("/home"); // Navega para a página inicial ao submeter
        },
    });

    return (
        <div className="">
          <Container component="main" maxWidth="xs"> {/* Contêiner para o formulário */}
            <Box className="caixota" sx={{ marginTop: 8 }}>
              <form onSubmit={formik.handleSubmit}> {/* Formulário com gerenciamento de submissão */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Avatar sx={{ m: 1, bgcolor: avatarBgColor }}> {/* Avatar com ícone */}
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5" sx={{ color: textColor }}>
                    Login {/* Título do formulário */}
                  </Typography>
                </Box>
                <div className="mb-2">
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email" // ID do campo
                    name="email" // Nome do campo
                    label="Email" // Rótulo do campo
                    value={formik.values.email} // Valor do campo
                    onChange={formik.handleChange} // Atualiza o valor no Formik
                    onBlur={formik.handleBlur} // Marca o campo como "tocado"
                    error={formik.touched.email && Boolean(formik.errors.email)} // Verifica se houve erro
                    helperText={formik.touched.email && formik.errors.email} // Mensagem de erro
                    InputProps={{style: { color: textColor }}} // Estilo do texto
                    InputLabelProps={{style: { color: textColor }}} // Estilo do rótulo
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: textColor, }, // Estilo do campo
                        '&:hover fieldset': { borderColor: textColor, },
                        '&.Mui-focused fieldset': { borderColor: textColor, },
                      },
                    }}
                  />
                </div>
                <div>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="password" // ID do campo
                    name="password" // Nome do campo
                    label="Senha" // Rótulo do campo
                    type="password" // Tipo do campo (senha)
                    value={formik.values.password} // Valor do campo
                    onChange={formik.handleChange} // Atualiza o valor no Formik
                    onBlur={formik.handleBlur} // Marca o campo como "tocado"
                    error={formik.touched.password && Boolean(formik.errors.password)} // Verifica se houve erro
                    helperText={formik.touched.password && formik.errors.password} // Mensagem de erro
                    InputProps={{style: { color: textColor }}} // Estilo do texto
                    InputLabelProps={{style: { color: textColor }}} // Estilo do rótulo
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: textColor, },
                        '&:hover fieldset': { borderColor: textColor, },
                        '&.Mui-focused fieldset': { borderColor: textColor, },
                      },
                    }}
                  />
                </div>
                <Button
                  type="submit" // Tipo do botão
                  fullWidth
                  variant="contained" // Estilo do botão
                  sx={{ mt: 2, mb: 2 }} // Margens
                  color={buttonColor} // Cor do botão
                >
                  Entrar {/* Texto do botão */}
                </Button>
              
                <Box sx={{display: 'flex',justifyContent: 'space-between',alignItems: 'center', width: '100%' }}>
                  <Link to="/forgotpass" variant="body2" className="link-color"> {/* Link para recuperação de senha */}
                    Esqueceu a senha?
                  </Link>
                  <Link to="/" variant="body2" className="link-color"> {/* Link para voltar */}
                    Voltar
                  </Link>
                </Box>
              </form>
            </Box>
          </Container>
        </div>
    );
}

export default Login; // Exporta o componente Login para ser utilizado em outras partes da aplicação
