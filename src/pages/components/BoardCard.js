import React, { Component } from 'react';
import { BrowserRouter as Link, Route } from "react-router-dom";
import './BoardCard.css';


export default class BoardCard extends Component {

    render() {
        return (
            <div className="contianer-card">
                <Link to={`$/board/` + this.props.boardID}>
                    <h4><b>{"ID: " + this.props.boardID}</b></h4>
                    <h4><b>{this.props.name}</b></h4>
                    <div className="footer">
                    </div>
                </Link>
            </div>
        )
    }
}