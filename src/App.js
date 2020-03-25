import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Education from './components/Education'
import { firebaseApp } from './firebase';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      description: "",
      myExperiences: [ {
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
      }]

    }
    // Inicializo la referencia
        this.userRef = firebaseApp.database().ref().child('user')
  }

  componentWillMount() {
    this.listenForUser(this.userRef);
  }

  listenForUser(userRef) {
    userRef.on('value', snap => {
      const user = {
        name: snap.val().name,
        description: snap.val().description,
      //  myExperiences: snap.val().myExperiences
     
      }
  
      this.setState({name: user.name, description: user.description});
    });
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
	
					<Education></Education>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
