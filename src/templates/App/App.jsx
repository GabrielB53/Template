import './App.css'
import '../../components/Carousel/Style.css'
import Navbar from '../../components/Navbar/Navegacao'
import Caarousel from '../../components/Carousel/Nsei'
import { Link } from 'react-router-dom';

function App() {
  const OPTIONS = {}
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  
  return (
    <div className=' opa'>
<navbar><Navbar /></navbar>
<h1 className='text-center fw-bold m-4'>Bem-vindo ao SGM!</h1>

<section className='uepa'>
  <Caarousel slides={SLIDES} options={OPTIONS} />
</section>
      <section className='container'>
        <h2>Transforme sua merenda em mudança: Consuma com consciência!</h2>
        <p>Você sabia que cada pedaço de merenda jogado fora é uma chance desperdiçada
         de fazer a diferença? A ODS 12, que fala sobre "Consumo e Produção Responsáveis",
         nos convida a pensar de forma consciente sobre tudo o que consumimos, incluindo o
         que comemos na escola. Se todo mundo fizer sua parte, podemos transformar pequenas
         atitudes em grandes mudanças!
         Quando você se serve, está tomando uma decisão importante. Então, 
         que tal pegar só o que você vai realmente comer? Além de evitar o desperdício, 
         você está ajudando a escola a planejar melhor as refeições e garantindo que todos
         tenham acesso a uma alimentação saudável.
         E quando sobrar comida? Em vez de ir para o lixo, essa comida pode ser redistribuída
         para quem precisa ou até virar compostagem para as hortas da escola. 
         Assim, nada se perde e tudo se transforma!
         Juntos, podemos acabar com o desperdício de merenda e mostrar que os jovens
         estão prontos para construir um futuro mais sustentável. Faça parte dessa 
         mudança, seja consciente, consuma com responsabilidade e ajude a espalhar essa ideia!
         </p>
        <h3>Sobre nós</h3>
        <p>Bem-vindo ao Sistema de Gerenciamento de Merenda Escolar!
          Nossa missão é garantir que cada refeição servida nas escolas seja planejada,
          preparada e distribuída com eficiência, sustentabilidade e qualidade. Somos uma 
          equipe apaixonada por educação e nutrição, comprometida em melhorar a experiência
          alimentar de estudantes.
         </p>
         <h3>Quem somos?</h3>
         <p>No SGM, acreditamos que a alimentação é uma parte crucial do sucesso educacional.
           Sabemos que uma boa nutrição está diretamente ligada ao desempenho acadêmico, à saúde física e 
           ao bem-estar emocional dos alunos. Por isso, desenvolvemos uma plataforma integrada que facilita 
           o gerenciamento completo da merenda escolar, desde o planejamento do cardápio 
           até o controle de estoque e a redução do desperdício.</p>
           <h3>Nossa história:</h3>
           <p>O SGM nasceu da necessidade de resolver problemas comuns enfrentados por escolas e instituições
           educacionais: a falta de controle sobre o desperdício de alimentos, a dificuldade em planejar 
           cardápios nutricionalmente balanceados e a complexidade da gestão de custos. Combinando tecnologia
           e expertise em nutrição escolar, criamos uma solução prática e acessível, capaz de transformar a
           forma como as escolas lidam com a merenda.</p>
           <h3>O Que Fazemos</h3>
           <p>Nosso sistema oferece uma variedade de funcionalidades para atender às 
            necessidades das escolas:</p>
           <ul>
            <li><b>Planejamento de Cardápios:</b> Ferramentas para criar cardápios balanceados, 
            ajustados às preferências e necessidades nutricionais dos alunos.</li>
            <li><b>Monitoramento de Consumo:</b> Relatórios detalhados sobre o consumo diário de alimentos, 
              ajudando a identificar padrões e a ajustar a oferta conforme necessário.
            </li>
            <li><b>Redução de Desperdício:</b> Funcionalidades que ajudam a minimizar o desperdício
               de alimentos, contribuindo para um ambiente escolar mais sustentável e consciente.</li>
           </ul>
           <h3>Nosso Compromisso</h3>
           <p>Estamos comprometidos com a melhoria contínua e com o impacto positivo nas
             comunidades em que atuamos. Sabemos que, ao melhorar a gestão da merenda escolar, 
             não estamos apenas economizando recursos, mas também contribuindo para o desenvolvimento 
             saudável e sustentável das futuras gerações.</p>
             <h3>Junte-se a Nós</h3>
             <p >Se você é gestor escolar, professor, pai ou mãe, ou simplesmente alguém que se preocupa 
              com a educação e o bem-estar das crianças, convidamos você a conhecer mais sobre o 
              SGM. Juntos, podemos criar um ambiente escolar onde a alimentação é uma prioridade, 
              garantindo que cada criança tenha acesso a refeições nutritivas e de qualidade.
              <br /> 
              Transforme a merenda escolar em um instrumento de mudança positiva.
               Junte-se a nós nessa jornada!</p>
      </section>
    
      <footer >
      <Link to={'/login'} className='btn btn-sm CorNavButtonLog '>Acesso restrito</Link>
      </footer>
    </div>
  )
}

export default App
