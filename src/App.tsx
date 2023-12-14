import LogoColegio from './assets/images/logo-cole.png';
import { Cedula } from "./pages/cedula/Cedula";

function App() {
    return (
		<div className="App">
			<div className="responsive">
				<h2>Elecciones Municipales</h2>
                <h2>Escolares 2024</h2>
				<img src={LogoColegio} alt="" />
			</div>
			<div className="app-in">
				<Cedula />
			</div>
		</div>
    );
}

export default App;
