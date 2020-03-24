import React, { Component } from 'react';

export default class Project extends Component {
    render() {
        const { name, time,description } = this.props.info;

        return(
        <div className="desc">
        <h3>{name}</h3>
        <h3>{time}</h3>
        <p>{description}</p>
        </div>
        );
    }
}