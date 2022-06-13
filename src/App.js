import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts'
import Skills from './components/Skills';
import Experience from './components/Experience'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contacts' element={<Contacts/>}/>
        <Route path='skills' element={<Skills/>}/>
        <Route path='experience' element={<Experience/>}/>
      </Route>
    </Routes>
  );
}

export default App;