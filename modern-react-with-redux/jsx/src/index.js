// import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create React Component
// const App = function() {
//     return <div>Hi there!</div>
// }
const App = () =>  {
    return (
        <div>
            <label class="label" for="name">
                Enter name:
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                Submit
            </button>
        </div>
    );
};

// Take react compoenent and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);