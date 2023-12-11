import candidato1 from '../../../assets/images/candidatos/candidato1.jpg';
import { BtnVotar } from './BtnVotar';

export const CedulaElectoral = ({ handlerConfirmVoto }:any) => {
    return (
        <div className="box-cedula-electoral">
            <div className="titulo-cedula">
                
                <h2>Cedula de sufragio</h2>
                <h4>Nivel primario</h4>
                <p className="mt20">Lista de candidatos</p>
            </div>

            <div className="lista-candidatos mt20 scroll">
                <div className="item-lista-candidatos m0">
                    <div></div>
                    <div className="nombre-candidato">
                        <p className='m0'>Candidato</p>
                    </div>
                    <div className="nombre-partido">
                        <p className='m0'>Nombre del partido</p>
                    </div>
                </div>

                {/* iterar aqui */}
                <div className="item-lista-candidatos">
                    <div className="img-candidato">
                        <img src={candidato1} alt="" />
                    </div>
                    <div className="nombre-candidato">
                        <h4>DEWARD NOE PONTECIL GUTIERREZ</h4>
                    </div>
                    <div className="nombre-partido">
                        <h4>TODO POR EL COLE</h4>
                    </div>
                </div>
                <div className="item-lista-candidatos">
                    <div className="img-candidato">
                        <img src={candidato1} alt="" />
                    </div>
                    <div className="nombre-candidato">
                        <h4>DEWARD NOE PONTECIL GUTIERREZ</h4>
                    </div>
                    <div className="nombre-partido">
                        <h4>TODO POR EL COLE TODO POR EL COLE TODO POR EL COLE</h4>
                    </div>
                </div>
                <div className="item-lista-candidatos">
                    <div className="img-candidato">
                        <img src={candidato1} alt="" />
                    </div>
                    <div className="nombre-candidato">
                        <h4>DEWARD NOE PONTECIL GUTIERREZ</h4>
                    </div>
                    <div className="nombre-partido">
                        <h4>TODO POR EL COLE TOR EL COLE</h4>
                    </div>
                </div>
                <div className="item-lista-candidatos">
                    <div className="img-candidato">
                        <img src={candidato1} alt="" />
                    </div>
                    <div className="nombre-candidato">
                        <h4>DEWARD NOE PONTECIL GUTIERREZ</h4>
                    </div>
                    <div className="nombre-partido">
                        <h4>TODO POR EL COLE TOR EL COLE</h4>
                    </div>
                </div>
                <div className="item-lista-candidatos">
                    <div className="img-candidato">
                        <img src={candidato1} alt="" />
                    </div>
                    <div className="nombre-candidato">
                        <h4>DEWARD NOE PONTECIL GUTIERREZ</h4>
                    </div>
                    <div className="nombre-partido">
                        <h4>TODO POR EL COLE TOR EL COLE</h4>
                    </div>
                </div>

            </div>

            <BtnVotar handlerConfirmVoto={handlerConfirmVoto} />

        </div>
    )
}




{/* <table class="default">

  <tr>

    <td>Celda 1</td>

    <td>Celda 2</td>

    <td>Celda 3</td>

  </tr>

  <tr>

    <td>Celda 4</td>

    <td>Celda 5</td>

    <td>Celda 6</td>

  </tr>

</table> */}