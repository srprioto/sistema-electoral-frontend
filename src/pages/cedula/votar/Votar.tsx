import { useEffect, useState } from 'react';
import { CedulaElectoral } from './CedulaElectoral';
import { CedulaInstrucciones } from './CedulaInstrucciones';
import { ModalConfirmarVoto } from './ModalConfirmarVoto';
import { WrapModal } from '../../../components/modals/WrapModal';
import { BtnBack } from '../../../components/acciones/BtnBack';
import { get } from '../../../resources/fetch';
import { CANDIDATOS } from '../../../resources/routes';

export const Votar = ({ setTabb, handlerBack, elector, candidato, setCandidato }:any) => {

    const [modalConfirm, setModalConfirm] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<Array<any>>([]);
    

    useEffect(() => {
        getListaCandidatos();
    }, [])


    const handlerConfirmVoto = () => { 
        setModalConfirm(true);
    }


    const getListaCandidatos = async () => { 
        setLoading(true);
        try {
            const response:any = await get(CANDIDATOS + "/" + elector.nivel);
            setData(response);
            setLoading(false);
        } catch (error) {
            setLoading(true);
            console.log(error);
        }
    }


    return (
        <div className="votar">
            
            <BtnBack handlerBack={handlerBack} />

            <div className='pad20 grid-21'>
                <CedulaElectoral 
                    data={data} 
                    loading={loading} 
                    candidato={candidato}
                    setCandidato={setCandidato} 
                    nivel={elector.nivel}
                />

                <CedulaInstrucciones 
                    handlerConfirmVoto={handlerConfirmVoto} 
                    elector={elector} 
                    candidato={candidato}
                    setCandidato={setCandidato}
                />

                <WrapModal modal={modalConfirm}>
                    <ModalConfirmarVoto 
                        modal={modalConfirm}
                        setModal={setModalConfirm}
                        candidato={candidato}
                        elector={elector}
                        setTabb={setTabb}
                    />
                </WrapModal>
            </div>

        </div>
    )
}
