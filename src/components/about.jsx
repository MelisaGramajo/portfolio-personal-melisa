import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">Acerca de mi</span>
                    <h2 className="colorlib-heading">¿Quien soy?</h2>
                    <p className="tamañoparrafo">Egresada de la carrera de Ingeniería en Sistemas de Información; actualmente desempeñando el rol de Developer. 
                    Soy una persona comprometida, tengo ideas innovadoras, me gustan los desafíos y nuevos proyectos que me pudieran proponer; así lograr crecer personal y profesionalmente. </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading">Algunas de mis experiencias laborales</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-device-desktop" />
                </span>
                <div className="desc">
                    <h3>Web Development</h3>
                    <h3>(03/20 - Actualidad)</h3>
                    <p>Experiencia en desarrollo de aplicaciones web usando JavaScript, React, HTML, CSS</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>QA Engineer</h3>
                    <h3>(05/19 - 02/20)</h3>
                    <p>Experiencia en la elaboración y ejecución de pruebas funcionales y automatizadas</p>
                    <p></p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Research assistant</h3>
                    <h3>(02/18 - Actualidad)</h3>
                    <p>Investigación, analizando nuevas formas de aprendizaje aplicando mundos virtuales</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
