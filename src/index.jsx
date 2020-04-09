import React from './mini-react';
import ReactDOM from './mini-react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

const Func = props => <h1>{ props.name }</h1>

class Comp extends React.Component {
  state = {
    userList: [
      {
        name: 'lin',
        age: 12
      }, {
        name: 'qi',
        age: 15
      }, {
        name: 'bin',
        age: 18
      }
    ]
  }
  render() {
    return (
      <h2>
        { this.props.name }
        <ul>
          { this.state.userList.map(item => (
            <li>{ item.name }--{ item.age }</li>
          )) }
        </ul>
      </h2>
    )
  }
}

const App = (
  <div id="mini-react" className="demo">
    123
    <p>nihao</p>
    <Func name="lin"/>
    <Comp name="bin"/>
  </div>
)

ReactDOM.render(
  App,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
