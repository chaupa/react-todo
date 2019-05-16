import React from 'react';
import {Component} from 'react';
import './App.css';
import Todo from './Todo';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>This is Todo Application</h1>
                </header>
                <Todo />
            </div>
        );
    }
}

export default App;
