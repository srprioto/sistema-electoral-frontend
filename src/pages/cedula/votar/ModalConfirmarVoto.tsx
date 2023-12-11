import { Modal } from "../../../components/modals/Modal"

export const ModalConfirmarVoto = ({ modal, setModal, setTabb }:any) => {

    const handlerConfirm = () => { 
        setTabb(3);
    }

    return (
        <Modal
            modal={modal}
            setModal={setModal}
        >
            <div className="modal-confirmar">
                <div className="info-modal">

                    <h3>Estas seguro que quieres votar por ... </h3>
                    <h3>NOMBRE DEL CANDIDATO</h3>

                </div>
                
                <div className="botones-modal-confirmar">
                    <button className="btn btn-success" onClick={handlerConfirm}>SI</button>
                    <button className="btn btn-warning" onClick={() => { setModal(false) }}>NO</button>
                </div>

            </div>
        </Modal>
    )
}
