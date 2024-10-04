// IMPORTS
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/content';


// App function, using client side routing, route handles path
function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/read" element={<Footer />} />
        <Route path="/create" element={<Header />} />
      </Routes>
    </Router>
  );
}

export default App;