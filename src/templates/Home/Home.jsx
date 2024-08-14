
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import Caarousel from '../../components/Carousel/Nsei'

const Home = () => {
    const OPTIONS = {}
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    return (
        <div className="d-flex">
           <Sidebar />
           <div className="p-3 w-100">
                <Header 
                    goto={'/'}
                    title={'Inicial'}
                    logo={logo}
                    />
                <h2>Conteúdo Home</h2>
<section className='uepa'>
  <Caarousel slides={SLIDES} options={OPTIONS} />
</section>
                <p>Paia doido</p>
                
           </div>
        </div>
    )
}

export default Home