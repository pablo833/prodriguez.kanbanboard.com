import React, { Component } from 'react';
import './BoardColumn.css';
import BoardTask from './BoardTask';

export default class BoardColumn extends Component {

    constructor() {
        super();
        this.generateBoardTasks = this.generateBoardTasks.bind(this);
    }
    addTask() {
        // alert(arguments);
    }

    generateBoardTasks() {

        var tasksList = this.props.tasks.map(function (element, index) {
            if (element != undefined) {
                return <BoardTask key={index} name={element.name} description={element.description}>
                </BoardTask>
            }
        })

        return tasksList;
    }
    render() {
        return (

            <div className="container-column">
                <div className="column-header">
                    <p>{this.props.columnName}</p>
                </div>
                <div className="content-column">
                    <div>
                        {this.generateBoardTasks()}
                    </div>
                    <div className="footer">
                        <button className="button-column" onClick={this.addTask.bind(this)}>Add +</button>
                    </div>
                </div>
            </div>
        )
    }
}