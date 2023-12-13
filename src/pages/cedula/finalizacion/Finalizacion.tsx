import LogoColegio from '../../../assets/images/logo-cole.png';
import { BtnBack } from '../../../components/acciones/BtnBack';

export const Finalizacion = ({ handlerBack, candidato }:any) => {

    // console.log(candidato.alcalde);
    // console.log(candidato.nombre_lista);

    const candiatoSelect:boolean = !!Object.keys(candidato).length;

    return (
        <div className="pad20 finalizacion">

            <BtnBack handlerBack={handlerBack} />

            <div className='box-finalizacion'>

                {
                    candiatoSelect
                    ? <div className="desc-finalizacion">
                        <h2 className='mb20'>BIEN HECHO</h2>

                        <h3 className='info-finalizacion-voto'>Acabas de votar por</h3>
                        <h3>{ candidato.alcalde }</h3>
                        <h3 className='info-finalizacion-voto'>De la lista</h3>
                        <h3>{ candidato.nombre_lista }</h3>

                        <p>Tu voto fue registrado correctamente.</p>

                        <h2>¡GRACIAS POR PARTICIPAR!</h2>
                    </div>
                    : <div className="desc-finalizacion">
                        {/* <h2 className='mb20'>BIEN HECHO</h2> */}
                        <h3>Acabas de votar <strong>en blanco</strong></h3>
                        <p>Tu voto fue registrado correctamente.</p>

                        <h2>¡GRACIAS POR PARTICIPAR!</h2>
                    </div>
                }
                

                <img className='logo-cole-cedula' src={LogoColegio} alt="" />

            </div>
            

        </div>
    )
}
