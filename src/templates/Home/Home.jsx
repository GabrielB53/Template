
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import Caarousel from '../../components/Carousel/Nsei'
import './Home.css'
const Home = () => {
    const OPTIONS = {}
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    return (
        <div className="d-flex opa">
           <Sidebar />
           <div className="p-3 w-100">
                <Header 
                    goto={'/'}
                    title={'Inicial'}
                    logo={logo}
                    />
                    <div className="caixota mt-3">
               <h2 className="text-center fw-bold m-4">Bem-vindo!</h2>
<section className='uepa'>
  <Caarousel slides={SLIDES} options={OPTIONS} />
</section>
<div className="container"><h3>Nosso Compromisso</h3>
        <p>Estamos comprometidos com a melhoria contínua e com o impacto positivo nas
        comunidades em que atuamos. Sabemos que, ao melhorar a gestão da merenda escolar, 
        não estamos apenas economizando recursos, mas também contribuindo para o desenvolvimento 
        saudável e sustentável das futuras gerações.</p>
        <p >Bem-vindo ao Sistema de Gerenciamento de Merenda Escolar!
          Nossa missão é garantir que cada refeição servida nas escolas seja planejada,
          preparada e distribuída com eficiência, sustentabilidade e qualidade. Somos uma 
          equipe apaixonada por educação e nutrição, comprometida em melhorar a experiência
          alimentar de estudantes.
         </p></div>
         </div>
     
        </div>
        </div>
    )
}

export default Home