
import { CandidatoItem } from './CandidatoItem';

export const CedulaElectoral = ({ data, loading, candidato, setCandidato, nivel }:any) => {
    

    return (
        <div className="box-cedula-electoral">

            <div className="box-in-cedula-electoral">
            
                <div className="titulo-cedula">
                    <h2>Cedula de sufragio</h2>
                    <h4>{ nivel }</h4>
                    <p className="mt20">Lista de candidatos</p>
                </div>

                <div className='lista-candidatos mt20 scroll'>

                    <div className="item-lista-candidatos m0">
                        <div></div>
                        <div className="nombre-candidato">
                            <p className='m0'>Candidato</p>
                        </div>
                        <div className="nombre-partido">
                            <p className='m0'>Nombre del partido</p>
                        </div>
                    </div>

                    {
                        data.length <= 0
                        ? <div>cargando</div>
                        : (
                            loading 
                            ? <div>algo salio mal</div>
                            : (
                                data.map((e:any, index:number) => {
                                    return (
                                        <CandidatoItem 
                                            key={index} 
                                            e={e} 
                                            candidato={candidato}
                                            setCandidato={setCandidato} 
                                        />
                                    )
                                })
                            )                        
                        )
                    }

                </div>

            </div>

            {/* <BtnVotar handlerConfirmVoto={handlerConfirmVoto} /> */}

        </div>
    )
}




/* 

    <div className="item-lista-candidatos">
        <div className="img-candidato">

            <img src="https://drive.google.com/uc?id=1oOu7fl5-bf6ro4SApBG7rj_yRW0cNGts" alt="" />
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
            <img src="https://drive.google.com/uc?id=1OlMl5wHykOiuYEBda2PskQqtZCfI5tes" alt="" />
        </div>
        <div className="nombre-candidato">
            <h4>DEWARD NOE PONTECIL GUTIERREZ</h4>
        </div>
        <div className="nombre-partido">
            <h4>TODO POR EL COLE TODO POR EL COLE TODO POR EL COLE</h4>
        </div>
    </div>

*/