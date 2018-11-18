import React, { Component } from 'react';
import './Home.css';
import BoardCard from './components/BoardCard';
import { BrowserRouter as Route, Link } from "react-router-dom";
import Board from './Board';
export default class Home extends Component {

    constructor() {
        // Agregar una caratula en GIT.
        super();
        this.state = {
            boards: []
        };

        this.createBoards = this.createBoards.bind(this);
        this.addBoard = this.addBoard.bind(this);
    }

    componentWillMount() {
        fetch('http://localhost:8080/board')
            .then(function (response) {
                return response.json();
            })
            .then((myJson) => {
                this.setState({
                    boards: myJson
                });
            });

    }

    createBoards() {
        var boardList = this.state.boards.map(function (element, index) {

            return <Link key={index}
                to={'board/' + element.board._id}>
                <div className="home-board-card">
                    <b>{"ID: " + element.board._id}</b>
                    <b>{element.board._name}</b>
                   
                </div>
            </Link>

        })
        return boardList;
    }

    addBoard(e) {
        if (e.target.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";
        }

        e.preventDefault();
    }
    render() {
        return (

            <div className="container-Home" >
                <div className="create-Board">
                    <input className="input" placeholder="Enter Board Name">
                    </input>
                    <button className="button" type="submit" onClick={this.addBoard}>Add</button>
                </div>
                <div className="body-boards" >
                    {this.createBoards()}
                </div>
            </div>

        );
    }
}


