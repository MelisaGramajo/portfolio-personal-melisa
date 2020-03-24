import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "Soy Gramajo, Melisa Rocio",
      description: "Egresada de la carrera de Ingeniería en Sistemas de Información; actualmente desempeñando el rol de Developer. Soy una persona comprometida, tengo ideas innovadoras, me gustan los desafíos y nuevos proyectos que me pudieran proponer; así lograr crecer personal y profesionalmente",
      myExperiences: [
        {
          name: "Web Development",
          time:"(03/20 - Actualidad)",
          description: "Experiencia en desarrollo de aplicaciones web usando JavaScript, React, HTML, CSS"
        }, {
          name: "QA Engineer",
          time:"(05/19 - 02/20)",
          description: "Experiencia en la elaboración y ejecución de pruebas funcionales y automatizadas"
        }, {
          name: "Research assistant",
          time:"(02/18 - Actualidad)",
          description: "Investigación, analizando nuevas formas de aprendizaje aplicando mundos virtuales"
        }
      ]


    }
  }
  render() {
    const {
      name,
      description,
      myExperiences
    } = this.state

    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
        <Introduction
            name={name}
        />
          <About
            description={description}
            experiences={myExperiences}
        />
	
					<Timeline></Timeline>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
