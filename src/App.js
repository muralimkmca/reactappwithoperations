import './App.css';
import {BrowserRouter,Route,Routes } from 'react-router-dom';
import { Home } from './component/Home';
import { Department } from './component/Department';
import { Employee } from './component/Employee';
import { Navigation} from './component/Navigation';
import { BookList} from './component/BookList';
import { InsertBook} from './component/InsertBook';
import { InsertBookform} from './component/InsertBookform';
import { AddBook} from './component/AddBook';

function App() {
  return (   
    <div>
      <Navigation />
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} exact />
            <Route path="/dept" element={<Department/>} />
            <Route path="/emp" element={<Employee/>} />
            <Route path="/booklist" element ={<BookList/>}/>
            <Route path="/insertbook" element ={<InsertBook/>}/>
            <Route path="/insertbookform" element ={<InsertBookform/>}/>
            <Route path="/addbook" element ={<AddBook/>}/>
          </Routes>      
    
          </BrowserRouter>
          </div>
  );
}

export default App;
