import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
    const navigate = useNavigate();

    const login = () => {
        navigate("/login");
    }

  return (
    <>
     <Button onClick={login} color='secondary'>Acesso Restrito</Button>
    </>
  );
};

export default LoginButton;
