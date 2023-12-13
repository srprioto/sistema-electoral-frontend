import { useState } from "react";
import { Modal } from "../../../components/modals/Modal"
import { post } from "../../../resources/fetch";
import { RESULTADOS } from "../../../resources/routes";

export const ModalConfirmarVoto = ({ modal, setModal, candidato, elector, setTabb }:any) => {

    const [loading, setLoading] = useState<boolean>(false);

    const handlerConfirm = async () => { 

        setLoading(true);
        try {
            const response:any = await post(RESULTADOS, {
                padronId: elector.id,
                candidatoId: candidato.id,
                nivel: elector.nivel
            });
            if (response.success) {
                setLoading(false);
                setTabb(3);
            }
        } catch (error) {
            setLoading(true);
            console.log(error);
        }
        
    }

    const candiatoSelect:boolean = !!Object.keys(candidato).length;


    return (
        <Modal
            modal={modal}
            setModal={setModal}
        >

            {
                loading
                ? <div className="modal-confirmar">
                    <div className="center">
                        cargando
                    </div>
                </div> : <div className="modal-confirmar">
                    {
                        candiatoSelect
                        ? <div className="info-modal">
                            <p>¿Seguro que quieres votar por</p>
                            <h3>{ candidato.alcalde }</h3>
                            <p>de la lista</p>
                            <h3>{ candidato.nombre_lista }?</h3>
                        </div> : <div className="info-modal">
                            <p>¿Seguro que quieres votar <strong>en blanco</strong>?</p>
                        </div>
                    }
                    <div className="botones-modal-confirmar">
                        <button className="btn btn-success" onClick={() => { handlerConfirm() }}>SI</button>
                        <button className="btn btn-warning" onClick={() => { setModal(false) }}>NO</button>
                    </div>
                </div>
            }

        </Modal>
    )
}
