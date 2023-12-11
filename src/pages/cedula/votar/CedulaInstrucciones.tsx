import LogoColegio from '../../../assets/images/logo-cole.png';

export const CedulaInstrucciones = () => {
    return (
        <div className="box-cedula-instrucciones">

            <div className="cedula-descripcion">

                <div className='mb20'>
                    <h2 className='m0'>Elecciones Municipales</h2>
                    <h2 className='m0'>Escolares Fuerabamba 2024</h2>
                </div>

                <p>Hola <strong>Renato Renzo Luna Herrera</strong></p>

                <p>Esta es una cedula de sufragio digital.</p>
                <p>Busca y escoge a tu candidato preferido, verifica que sea el correcto y vota.</p>

                <h3>¡Adelante!</h3>
            </div>
            
            <img className='logo-cole-cedula' src={LogoColegio} alt="" />

        </div>
    )
}
