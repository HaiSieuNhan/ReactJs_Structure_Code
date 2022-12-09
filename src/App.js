import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RootWrapper from './wappers/RootWrapper';

function App() {
  return (
    <BrowserRouter>
         <RootWrapper />
    </BrowserRouter>
  );
}

export default App;
