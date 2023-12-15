import { BiChevronRight } from 'react-icons/bi';
import LogoColegio from '../../../assets/images/logo-cole.png';
import { Loading } from '../../../components/Loading';

interface login {
    handlerLogin:Function;
    data:any;
    handlerOnChange:Function;
    loading:boolean;
    response:any;
}

export const Login = ({ handlerLogin, data, handlerOnChange, loading, response }:login) => {

    console.log(response.state);

    // 2 - voto listo
    // 3 - no existe

    return (
        <div className="login h100">
            
            <div className="box-left h100">

                <div className="input-login">

                    <div className="titulo-login">
                        <h1>Elecciones Municipales</h1>
                        <h1>Escolares 2024</h1>
                    </div>
                    
                    {
                        loading
                        ? <div className="box-login-loading">
                            <Loading />
                        </div>
                        : <div className='box-content-login'>
                            <p className="desc-login">Ingresa tu DNI</p>
                            <input 
                                className="mb20" 
                                type="number" 
                                name="dni" 
                                id="" 
                                onChange={(e:any) => handlerOnChange(e)} 
                            />
                            {
                                data.dni.length === 8
                                ? <button
                                    onClick={() => { handlerLogin() }}
                                    className="btn btn-warning mb20"
                                >Acceder <BiChevronRight /> </button>
                                : <button
                                    className="btn btn-disable mb20"
                                >Acceder <BiChevronRight /> </button>
                            }
                        </div>
                    }

                    <div className='texto-validacion'>
                        { response.state === 2 && <h5>Tu voto ya fue registrado</h5> }
                        { response.state === 3 && <h5>Tu DNI no forma parte del padron</h5> }
                    </div>

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
