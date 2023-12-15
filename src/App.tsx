import LogoColegio from './assets/images/logo-cole.png';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cedula } from "./pages/cedula/Cedula";
import { Resultados } from './pages/cedula/resultados/Resultados';
import { ResultadosPrimaria } from './pages/cedula/resultados/ResultadosPrimaria';
import { ResultadosSecundaria } from './pages/cedula/resultados/ResultadosSecundaria';

function App() {
    return (
		<div className="App">
			<div className="responsive">
				<h2>Elecciones Municipales</h2>
                <h2>Escolares 2024</h2>
				<img src={LogoColegio} alt="" />
			</div>
			<div className="app-in">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={ <Cedula /> } />
						<Route path="/1a3e5b7c9d1e3f7a1b3c5e7d9f1a3e5b/resultados" element={ <Resultados /> } />
						<Route path="/1a3e5b7c9d1e3f7a1b3c5e7d9f1a3e5b/resultados/primaria" element={ <ResultadosPrimaria /> } />
						<Route path="/1a3e5b7c9d1e3f7a1b3c5e7d9f1a3e5b/resultados/secundaria" element={ <ResultadosSecundaria /> } />
					</Routes>
				</BrowserRouter>
				
			</div>
		</div>
    );
}

export default App;
