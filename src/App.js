import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <AllRoutes />
      </ChakraProvider>
    </div>
  );
}

export default App;
