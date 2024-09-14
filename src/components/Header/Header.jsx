import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

const Header = ({ goto, title, logo }) => {
    const navigate = useNavigate();

    const vaipara = () => {
        navigate(goto);  // Remove curly braces around `goto`
    };

    return (
        <div className="
            d-flex justify-content-between align-content-center 
            p-3 border-bottom shadow rounded caixota">
            <Button 
                onClick={vaipara} 
                variant="contained" 
                color="primary"
                className="fw-medium shadow">
                Voltar
            </Button>
            <div>
                <span className="fw-bold h2">{title}</span>
            </div>
            <div>
                <img src={logo} alt="logo" />
            </div>
        </div>
    );
};

export default Header;
