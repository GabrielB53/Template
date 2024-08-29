import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/images/system-logo_128_x_128.png';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();

    const goto = () => {
        navigate("/home");
    }

    const backto = () => {
        navigate("/");
    }

    return (
        <div className="">
            <form action="" className="login-form">
                <div className="login-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label mb-0 fw-bold">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="form-control fw-medium shadow" 
                        placeholder="rm00000@estudante.fieb.edu.br" 
                    />
                </div>
                <div>
                    <label htmlFor="password" className="form-label mb-0 fw-bold">Senha:</label>
                    <input 
                        type="password" 
                        id="password" 
                        className="form-control fw-medium shadow" 
                        placeholder="••••••••••" 
                    />
                </div>
                <div className="d-flex justify-content-center md-1">
                    <p className="fw-bold fst-italic opacity-90 me-1 p-2"> 
                        Esqueceu a senha?   <Link to={'/forgotpass'}>Clique aqui.</Link>
                    </p>
                </div>
                
                <div className="d-flex justify-content-around mb-3 mt-2">
                    <button 
                        className="btn btn-warning fw-medium shadow" 
                        type="button"
                        onClick={backto}>
                        Cancelar
                    </button>
                    <button 
                        className="btn btn-success fw-medium shadow" 
                        type="submit"
                        onClick={goto}>
                        Entrar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login;
