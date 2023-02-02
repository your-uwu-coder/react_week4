import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Num from './components/Num'
import AboutMe from './components/AboutMe';
import Word from './components/Word';

function App() {
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <Link to={'/aboutme'}>About Me Page</Link>
      <br/>
      <Link to={'/:id'}>Number</Link>
      <br/>
      <Link to={'/:word/:color1/:color2'}>Word And Color</Link>
      <Routes>
        <Route path='/aboutme' element={ <AboutMe/> } />
        <Route path='/:id' element={ <Num/> } />
        <Route path='/:word/:color1/:color2' element={ <Word/> }/>
      </Routes>
    </div>
  );
}

export default App;
