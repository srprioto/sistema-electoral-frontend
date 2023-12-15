import { useNavigate } from 'react-router-dom';

export const Resultados = () => {

    const navigate = useNavigate();

    const handleNavPrimaria = () => {
        navigate('/1a3e5b7c9d1e3f7a1b3c5e7d9f1a3e5b/resultados/primaria');
    };

    const handleNavSecundaria = () => {
        navigate('/1a3e5b7c9d1e3f7a1b3c5e7d9f1a3e5b/resultados/secundaria');
    };

    return (
        <div className="resultados">
            
            <div className="titulo-resultados">
                <h2>Elecciones Municipales Escolares 2024</h2>
                <h3>Resultados</h3>
            </div>

            <div className="select-resultados">

                <button className="btn btn-warning" onClick={handleNavPrimaria}>Nivel Primario</button>

                <button className="btn btn-warning" onClick={handleNavSecundaria}>Nivel Secundario</button>

            </div>


        </div>
    )
}
