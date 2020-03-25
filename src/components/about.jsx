import React, { Component } from 'react';
import Experience from './Experience';

export default class About extends Component {
  render() {
      const{description,experiences}= this.props;
   const newesperiences= experiences.map(experience => <Experience info={experience} key={experience.name} />);
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
                    <p className="tamañoparrafo">{description} </p>
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
               {newesperiences[0]}
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                {newesperiences[1]}
               
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                {newesperiences[2]}
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
