import './Assets/Styles/App.css';
import Cabecalho from './Components/Cabecalho';
import Banner from './Components/Banner';
import Destaques from './Components/Destaques';
import Rodape from './Components/Rodape';

function App() {
  return (
    <div className="App">
      <Cabecalho/>
      <Banner/>
      <Destaques/>
      <Rodape/>
    </div>
  );
}

export default App;
