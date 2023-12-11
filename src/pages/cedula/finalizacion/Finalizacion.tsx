import LogoColegio from '../../../assets/images/logo-cole.png';
import { BtnBack } from '../../../components/acciones/BtnBack';

export const Finalizacion = ({ handlerBack }:any) => {
    return (
        <div className="pad20 finalizacion">

            <BtnBack handlerBack={handlerBack} />

            <div className='box-finalizacion'>

                <div className="desc-finalizacion">
                    <h2 className='mb20'>BIEN HECHO</h2>
                    <h3>Acabas de votar por</h3>

                    <h3 className='fin-nombre-partido'>RENATO RENZO LUNA HERRERA</h3>

                    <p>Tu voto fue registrado correctamente.</p>

                    <h2>¡GRACIAS POR PARTICIPAR!</h2>
                </div>

                <img className='logo-cole-cedula' src={LogoColegio} alt="" />

            </div>
            

        </div>
    )
}
