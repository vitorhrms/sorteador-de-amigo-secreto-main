import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Formulario from './components/Formulario/Formulario';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" Component={Formulario} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
