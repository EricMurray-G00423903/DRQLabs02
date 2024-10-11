// IMPORTS
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import Content from './Components/content';
import Create from './Components/Create';
import Read from './Components/Read';


// App function, using client side routing, route handles path
function App() {

  // Set up routes for different components in NavBar using Router(client side)
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Content />} /> 
        <Route path="/read" element={<Read />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );

}

// Export
export default App;