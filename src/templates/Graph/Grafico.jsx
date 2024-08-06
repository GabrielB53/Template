import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import Comp from '../../components/Carrousel/Carrousel'
import './Grafico.css'

const Grafico = () => {
   
    return (
        <div className="d-flex">
           <Sidebar />
           <div className="p-3 w-100">
                <Header 
                    goto={'/home'}
                    title={'Gráfico'}
                    logo={logo}
                    />
                <h2>Conteúdo da página</h2>
                <p>alguma coisa aí</p>
                <div id="ContainerGraph">
                    <Comp/>
                    </div>
             
           </div>
        </div>
    )
}

export default Grafico