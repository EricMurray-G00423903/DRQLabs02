// IMPORTS
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/content';
import Movies from './Components/Movies';
import Create from './Components/Create';


// App function, using client side routing, route handles path
function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/read" element={<Movies />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;