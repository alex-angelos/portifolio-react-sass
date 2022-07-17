import {FaLinkedinIn, FaGithub, FaInstagram, FaBehanceSquare} from "react-icons/fa"

import '../styles/components/socialnetwork.sass'

const socialNetworks = [
  {name:"linkedin", link: "https://www.linkedin.com/in/alex-angelos-99ba64116/",icon: <FaLinkedinIn />},
  {name:"github", link: "https://github.com/alex-angelos",icon: <FaGithub />},
  {name:"instagram",link:"https://www.instagram.com/angelosalex/", icon: <FaInstagram />},
  {name:"behance", link:"https://www.behance.net/alexangelos", icon:<FaBehanceSquare/>},
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network)=>(
        <a href={network.link} className="social-btn" id={network.name} key={network.name}>{network.icon}</a>
      ))}
    </section>
  )
}

export default SocialNetworks