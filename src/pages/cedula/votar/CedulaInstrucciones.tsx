import { BiX } from 'react-icons/bi';
import LogoColegio from '../../../assets/images/logo-cole.png';
import { BtnVotar } from './BtnVotar';

export const CedulaInstrucciones = ({ handlerConfirmVoto, elector, candidato, setCandidato }:any) => {

    const candiatoSelect:boolean = !!Object.keys(candidato).length;

    const clearCandidato = () => { 
        setCandidato({});
    }

    return (
        <div className="box-cedula-instrucciones">

            {
                candiatoSelect
                ? <div className='w100 plancha-electoral'>

                    <div className='icon-borrar-candidato' onClick={clearCandidato}>
                        <BiX />
                    </div>

                    <h3 className='center'>{ candidato.nombre_lista }</h3>

                    <h4 className='warning'>Plancha electoral</h4>

                    <h4>Alcalde(sa): </h4>
                    <ul>
                        <li className='success'>{ candidato.alcalde }</li>
                    </ul>

                    <h4>Teniente alcalde(sa): </h4>
                    <ul>
                        <li className='success'>{ candidato.teniente_alcalde }</li>
                    </ul>

                    <h4>Regidores:</h4>
                    <ul>
                        <li className='success'>{ candidato.regidor_comunicacion }</li>
                        <li className='success'>{ candidato.regidor_derechos }</li>
                        <li className='success'>{ candidato.regidor_educacion }</li>
                        <li className='success'>{ candidato.regidor_emprendimiento }</li>
                        <li className='success'>{ candidato.regidor_salud }</li>
                    </ul>

                </div>
                : <div className="cedula-descripcion">

                    <img className='logo-cole-cedula' src={LogoColegio} alt="" />

                    <div className='mb20'>
                        <h2 className='m0'>Elecciones Municipales</h2>
                        <h2 className='m0'>Escolares Fuerabamba 2024</h2>
                    </div>

                    <p className='nombre-elector'>Hola <strong>{ elector.nombre }</strong></p>

                    <p>Esta es una cedula de sufragio digital.</p>
                    <p>Busca y escoge a tu candidato preferido,</p>
                    <p>verifica que sea el correcto y vota.</p>

                    <h3>¡Adelante!</h3>

                </div>
            }

            <BtnVotar handlerConfirmVoto={handlerConfirmVoto} candiatoSelect={candiatoSelect}/>

        </div>
    )
}


















