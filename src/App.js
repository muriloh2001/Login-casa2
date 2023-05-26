import { BrowserRouter as Router} from 'react-router-dom';



import RotasPage from './Rotas';
import Header from './pages/componentes/Header';




function App() {
  return (
    
    <Router>
      <Header/>
      <RotasPage/>
    </Router>
   
  );
}

export default App;
