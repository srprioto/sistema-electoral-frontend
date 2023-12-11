import { useState } from 'react';
import { CedulaElectoral } from './CedulaElectoral';
import { CedulaInstrucciones } from './CedulaInstrucciones';
import { ModalConfirmarVoto } from './ModalConfirmarVoto';
import { WrapModal } from '../../../components/modals/WrapModal';
import { BtnBack } from '../../../components/acciones/BtnBack';

export const Votar = ({ setTabb, handlerBack }:any) => {

    const [modalConfirm, setModalConfirm] = useState<boolean>(false);

    const handlerConfirmVoto = () => { 
        setModalConfirm(true);
    }

    return (
        <div className="votar">
            
            <BtnBack handlerBack={handlerBack} />

            <div className='pad20 grid-21'>
                <CedulaElectoral handlerConfirmVoto={handlerConfirmVoto} />

                <CedulaInstrucciones />

                <WrapModal modal={modalConfirm}>
                    <ModalConfirmarVoto 
                        modal={modalConfirm}
                        setModal={setModalConfirm}
                        setTabb={setTabb}
                    />
                </WrapModal>
            </div>

        </div>
    )
}
