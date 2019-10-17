import React,{Component} from 'react';
import Header from './components/Header';
import Buscador from './components/Buscador';
class App extends Component {
  render(){
    return (
      <div className="App">
        <Header/>
        <Buscador/>
      </div>
    );
  }
 
}

export default App;
