import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import Posts from './pages/Posts';
function App() {
  return (
    <Router>
    <div>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path=':id' element={<Posts />}></Route>
    </Routes>
    </div>
    </Router>

  );
}

export default App;
