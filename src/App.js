import logo from './logo.svg';
import './App.css';
import HoraActual from './componentes/horaActual';
import FotografiaCambiante from './componentes/fotografiaCambiante';
import KeepMountedModal from './componentes/botonmodal';

function App() {
  return (
    <div className="App">
      <HoraActual></HoraActual>
      <FotografiaCambiante></FotografiaCambiante>
      <KeepMountedModal></KeepMountedModal>
    </div>
  );
}

export default App;
