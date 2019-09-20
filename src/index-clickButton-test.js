import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
    constructor() {
        super();
        this.handleClick2 = this.handleClick1.bind(this);
    }

    handleClick1 = () => {
        console.log('Button 1 is clicled.');
    }

    handleClick3 = () => {
        console.log('Button 3 is cliked');
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick1()}>Clisk 1</button>
                <button onClick={this.handleClick1}>Click 2</button>
                <button onClick={this.handleClick2}>Click 3</button>
                <button onClick={this.handleClick3}>Click 4</button>
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
