import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/images/system-logo_128_x_128.png';
import './Login.css';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import Avatar from '@mui/material/Avatar';
import * as yup from 'yup';

const validationSchema = yup.object({
    email: yup
      .string('Digite seu email')
      .matches(
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
        'Digite um email válido'
      )
      .required('Email necessário'),
    password: yup
      .string('Digite sua senha')
      .min(8, 'A senha deve ter um tamanho minímo de 8 letras')
      .required('Senha necessária'),
  });
  
  

const Login = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: 'Exemplo@Gmail.com',
            password: 'foobar',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            navigate("/home");
        },
    });

    const backto = () => {
        navigate("/");
    }

    return (
        <div className="">
            <form onSubmit={formik.handleSubmit} className="login-form">
            <div className="d-flex justify-content-center align-items-center mb-3 mt-2">
               <Avatar sx={{ width: 140, height: 140 }} src="/broken-image.jpg" />
            </div>
                <div className="mb-2">
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        variant="standard"
                        placeholder="Login@gmail.com"
                    />
                </div>
                <div>
                    <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label="Senha"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        variant="standard"
                        placeholder="***********"
                    />
                </div>
                <div className="d-flex justify-content-center md-1">
                    <p className=" opacity-90 me-1 p-2"> 
                        Esqueceu a senha? <Link to={'/forgotpass'}>Clique aqui.</Link>
                    </p>
                </div>
                
                <div className="d-flex justify-content-around mb-3 mt-2">
                    <Button
                        className=" fw-medium shadow"
                        type="button"
                        onClick={backto}
                        variant="contained"
                        color="secondary"
                    >
                        Cancelar
                    </Button>
                    <Button
                        className="fw-medium shadow"
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Entrar
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default Login;
