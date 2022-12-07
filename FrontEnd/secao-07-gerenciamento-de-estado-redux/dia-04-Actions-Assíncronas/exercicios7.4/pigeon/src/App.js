import { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ISSLocation from './components/ISSLocation';
import { fetchISS } from './components/redux/actions';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    const INTERVAL_TIME = 2000;
    this.timer = setInterval(() => dispatch(fetchISS()), INTERVAL_TIME);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ISSLocation />
      </div>
    );
  }
}

export default connect()(App);