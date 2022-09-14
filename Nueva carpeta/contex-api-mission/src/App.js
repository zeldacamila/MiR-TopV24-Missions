import './App.css';
import Candidato1 from './components/Candidato1';
import Candidato2 from './components/Candidato2';
import Candidato3 from './components/Candidato3';
import Candidato4 from './components/Candidato4';
import TotalVotos from './components/TotalVotos';
import Filtro from './components/Filtro';
import { AuthProvider } from './store/context';

function App() {
  return (
    <div className="App">
{/*       <AuthProvider> */}
        <header className="App-header">
        <p>VOTACIONES 2022 PRESIDENTE MAKE IT REAL</p>
        <Candidato1 />
        <Candidato2 />
        <Candidato3 />
        <Candidato4 />
        <Filtro />
        <TotalVotos />
        </header>
{/*       </AuthProvider> */}

    </div>
  );
}

export default App;
