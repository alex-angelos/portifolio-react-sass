import Avatar from '../images/alex.png';
import SocialNetworks from './SocialNetwork'
import InformationContainer from './InformationContainer';

import "../styles/components/sidebar.sass";



const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Alex Angelos" />
      <p className="title">Desenvolvedor FullStack Jr</p>
      <SocialNetworks />
      <InformationContainer/>
      <a href="" className='btn'>Download Currículo</a>
    </aside>
  )
}

export default Sidebar