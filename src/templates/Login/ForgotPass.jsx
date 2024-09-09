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
  });
  
  

const ForgotPass = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            navigate("/login");
        },
    });

    const backto = () => {
        navigate("/login");
    }

    return (
        <div className="">
            <form onSubmit={formik.handleSubmit} className="login-form">
            <div className="d-flex justify-content-center align-items-center mb-2 mt-3">
               <Avatar sx={{ width: 140, height: 140 }} src="/broken-image.jpg" />
            </div>
            <div className="d-flex justify-content-center align-items-center"><h5>Recuperar Senha</h5></div>
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
                    />
                </div>
                
                <div className="d-flex justify-content-center md-1">
                    <p className=" opacity-90 me-1 p-2"> 
                        Acessar o Sistema: <Link to={'/forgotpass'}>Clique aqui.</Link>
                    </p>
                </div>
                
                <div className="d-flex justify-content-around mb-3 mt-2">
                    <Button
                        className="btn btn-primary fw-medium shadow"
                        type="button"
                        onClick={backto}
                        variant="contained"
                        color="secondary"
                    >
                        Voltar
                    </Button>
                    <Button
                        className="btn btn-success fw-medium shadow"
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Enviar
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default ForgotPass;
