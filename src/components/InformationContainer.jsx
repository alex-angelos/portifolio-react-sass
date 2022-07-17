import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from "react-icons/ai";

import '../styles/components/informationcontainer.sass';

const InformationContainer = () => {
  return (
    <section id="information">
        <div className="info-card">
            <AiFillPhone id="phone-icon" />
            <div>
                <h3>Telefone</h3>
                <p>(11) 95161-8617 </p>
            </div>
        </div>
        <div className="info-card">
            <AiOutlineMail id="email-icon" />
            <div>
            <h3>E-Mail</h3>
            <p>alex_angelos@hotmail.com </p>
            </div>
        </div>
        <div className="info-card">
            <AiFillEnvironment id="pin-icon" />
            <div>
            <h3>Localização</h3>
            <p>São Paulo- SP </p>
            </div>
        </div>
    </section>
  )
}

export default InformationContainer