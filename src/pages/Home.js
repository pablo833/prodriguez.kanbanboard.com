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
        this.createBoards2 = this.createBoards2.bind(this);
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
        var boardList = this.state.boards.map((element, index) => {
            return <BoardCard key={index} name={element.board._name} boardID={element.board._id} />
        });
        return boardList;
    }

    createBoards2() {
        var boardList = this.state.boards.map(function (element, index) {

            return <Link key={index}
                to={'board/' + element.board._id}>
                <div className="contianer-home-card">
                    <b>{"ID: " + element.board._id}</b>
                    <b>{element.board._name}</b>
                    <div className="footer"></div>
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

            <div className="container-Home-board2" >
                <div className="ontainer-Home-createBoard">

                    <input className="input" placeholder="Enter Board Name">
                    </input>
                    <button className="button" type="submit" onClick={this.addBoard}>add</button>

                </div>
                <div className="container-Home-board" >
                    {this.createBoards2()}
                </div>
            </div>

        );
    }
}


