import React, { Component } from 'react';
import BoardColumn from './components/BoardColumn';
import './Board.css';

export default class Board extends Component {
    constructor() {
        super();
        this.state = {
            tasks: []
        };
        this.splitTaskInColumn = this.splitTaskInColumn.bind(this);
        //  this.createColumns = this.createColumns.bind(this);
    }

    componentWillMount() {
        fetch('http://localhost:8080/task')
            .then(function (response) {
                return response.json();
            })
            .then((myJson) => {
                this.setState({
                    tasks: myJson
                });
            });
    }
    splitTaskInColumn(column) {

        var tasksList = this.state.tasks.map(function (element, index) {

            var rObj = {};
            if (element.task._column === column) {
                rObj['name'] = element.task._name;
                rObj['id'] = element.task._id;
                rObj['description'] = element.task._description;
                rObj['column'] = element.task._column;
                rObj['board'] = element.task._board;
                return rObj;
            }
        })
        return tasksList;
    }

    render() {
        return (
            <div className="container-board">
                <div className="container-board-column">
                    <BoardColumn tasks={this.splitTaskInColumn("todo")} columnName="TODO" />
                    <BoardColumn tasks={this.splitTaskInColumn("doing")} columnName="DOING" />
                    <BoardColumn tasks={this.splitTaskInColumn("done")} columnName="DONE" />
                </div>
            </div>
        );
    }
}