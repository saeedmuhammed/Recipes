import {Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

// pages import
import Home from './Pages/home/Home';
import Create from './Pages/create/Create'
import Search from './Pages/search/Search';
import Recipe from './Pages/recipe/Recipe';

function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route exact path='/' element={<Home />} />
      
        <Route path='/create' element={<Create />}/>
          
        <Route path='/search' element={<Search />}/>
            
        
        <Route path='/recipe/:id' element={<Recipe />}/>

        <Route path='*' element={<Navigate to='/' />} />

      </Routes>

       </div>
  );
}

export default App;
