import React, { Component } from 'react';
import './BoardTask.css';

export default class BoardTask extends Component {


    render() {
        return (
            <div className="contianer-task">
                <h4><b>{this.props.name}</b></h4>
                <p>{this.props.description}</p>
            </div>
        )
    }
}