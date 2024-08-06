import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'


const Home = () => {

    return (
        <div className="d-flex">
           <Sidebar />
           <div className="p-3 w-100">
                <Header 
                    goto={'/home'}
                    title={'Inicial'}
                    logo={logo}
                    />
                <h2>Conteúdo Home</h2>
                <p>Paia doido</p>
                
           </div>
        </div>
    )
}

export default Home