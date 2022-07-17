import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiMongodb,
    DiNodejsSmall,
    DiReact,
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
    {id:"html",name: "HTML" , icon: <DiHtml5/>},
    {id:"css",name: "CSS" , icon: <DiCss3/>},
    {id:"javascript",name: "JavaScript" , icon: <DiJsBadge/>},
    {id:"mongodb",name: "MongoDb" , icon: <DiMongodb/>},
    {id:"nodejs",name: "NodeJs" , icon: <DiNodejsSmall/>},
    {id:"react",name: "React" , icon: <DiReact/>},
  
]

function TechnologiesContainer() {
  return (
    <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
            {technologies.map((tech) =>(
                <div className="technology-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="technology info">
                        <h3>{tech.name}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Doloribus quam quos corporis necessitatibus excepturi 
                            quibusdam repudiandae earum atque labore non! Consequuntur 
                            laudantium, vel quo provident quae quod soluta amet distinctio.
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default TechnologiesContainer