import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/images/system-logo_128_x_128.png';
import './Login.css';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .matches(
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
        'Enter a valid email'
      )
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });
  
  

const Login = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // Aqui você pode implementar o login real ou redirecionar o usuário
            navigate("/home");
        },
    });

    const backto = () => {
        navigate("/");
    }

    return (
        <div className="">
            <form onSubmit={formik.handleSubmit} className="login-form">
                <div className="login-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="mb-3">
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
                    />
                </div>
                <div className="d-flex justify-content-center md-1">
                    <p className="fw-bold fst-italic opacity-90 me-1 p-2"> 
                        Esqueceu a senha? <Link to={'/forgotpass'}>Clique aqui.</Link>
                    </p>
                </div>
                
                <div className="d-flex justify-content-around mb-3 mt-2">
                    <Button
                        className="btn btn-warning fw-medium shadow"
                        type="button"
                        onClick={backto}
                        variant="contained"
                        color="warning"
                    >
                        Cancelar
                    </Button>
                    <Button
                        className="btn btn-success fw-medium shadow"
                        type="submit"
                        variant="contained"
                        color="success"
                    >
                        Entrar
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default Login;
