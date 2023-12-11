import { BiChevronRight } from 'react-icons/bi';
import LogoColegio from '../../../assets/images/logo-cole.png';

export const Login = ({ setTabb }:any) => {


    const handlerLogin = () => { 
        setTabb(2)
    }


    return (
        <div className="login h100">
            
            <div className="box-left h100">

                <div className="input-login">

                        <div className="titulo-login">
                            <h1>Elecciones Municipales</h1>
                            <h1>Escolares 2024</h1>
                        </div>
                        
                        <p className="desc-login">Ingresa tu DNI</p>

                        <input className="mb20" type="number" name="" id="" />

                        <button
                            onClick={handlerLogin}
                            className="btn btn-warning mb20"
                        >Acceder <BiChevronRight /> </button>

                </div>

            </div>

            <div className="box-right h100">

                <div className="box-box-right">

                    <img src={LogoColegio} alt="" />

                    <div className='titulo-colegio'>
                        <h2>Institucion Educativa Integrada</h2>
                        <h2>FUERABAMBA</h2>
                    </div>

                </div>

                

            </div>
            


        </div>
    )
}
